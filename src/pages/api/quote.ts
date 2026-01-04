import type { NextApiRequest, NextApiResponse } from 'next';
import { Client } from 'pg';
import { jsPDF } from 'jspdf';
import nodemailer from 'nodemailer';

// Aiven uses certificates that may not be in Node's trust store
// For development and Aiven cloud, we need to allow self-signed certificates
const clientConfig = {
  connectionString: process.env.DATABASE_URL || 'postgres://avnadmin:AVNS_81fjW_YZ-0yVK3ymq1r@pg-39f81324-travstaytion-01.k.aivencloud.com:28730/defaultdb',
  ssl: {
    rejectUnauthorized: false,
  },
};

// Email transporter configuration
const createTransporter = async () => {
  const smtpPass = process.env.SMTP_PASS;
  const smtpUser = process.env.SMTP_USER || 'holidays@travstaytion.com';
  const smtpHost = process.env.SMTP_HOST || 'smtp.hostinger.com';
  const smtpPort = parseInt(process.env.SMTP_PORT || '465');
  
  console.log('SMTP Config:', { 
    host: smtpHost, 
    port: smtpPort, 
    user: smtpUser, 
    passLength: smtpPass ? smtpPass.length : 0 
  });
  
  if (!smtpPass) {
    console.warn('SMTP_PASS not configured - emails will not be sent');
    return null;
  }
  
  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465, // true for 465, false for other ports
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
    tls: {
      rejectUnauthorized: false, // Accept self-signed certificates
    },
    connectionTimeout: 30000,
    greetingTimeout: 30000,
    socketTimeout: 60000,
    debug: true,
    logger: true,
  });
  
  // Verify SMTP connection
  try {
    await transporter.verify();
    console.log('SMTP connection verified successfully');
    return transporter;
  } catch (verifyError) {
    console.error('SMTP verification failed:', verifyError);
    return transporter; // Still return transporter, let sendMail handle errors
  }
};

// Generate beautiful PDF
function generateQuotePDF(data: {
  name: string;
  email: string;
  phone: string;
  destination: string;
  contactMethod: string;
  adults: string;
  children: string;
  infants: string;
  travelDate: string;
  returnDate: string;
  budget: string;
  tripType: string;
  accommodation: string;
  additionalDetails: string;
}): Buffer {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  
  // Colors
  const primaryBlue = [37, 99, 235]; // blue-600
  const tealColor = [20, 184, 166]; // teal-500
  const darkGray = [31, 41, 55];
  const lightGray = [107, 114, 128];
  
  // Header with gradient-like effect
  doc.setFillColor(primaryBlue[0], primaryBlue[1], primaryBlue[2]);
  doc.rect(0, 0, pageWidth, 45, 'F');
  
  // Company name
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(28);
  doc.setFont('helvetica', 'bold');
  doc.text('TravStaytion', 20, 25);
  
  // Tagline
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text('Your Journey, Our Passion', 20, 35);
  
  // Quote Request Title
  doc.setFontSize(12);
  doc.text('QUOTE REQUEST', pageWidth - 60, 25);
  doc.setFontSize(9);
  doc.text(new Date().toLocaleDateString('en-IN', { 
    day: '2-digit', 
    month: 'long', 
    year: 'numeric' 
  }), pageWidth - 60, 35);
  
  // Reset text color
  doc.setTextColor(darkGray[0], darkGray[1], darkGray[2]);
  
  let yPos = 60;
  
  // Customer Information Section
  doc.setFillColor(245, 247, 250);
  doc.roundedRect(15, yPos - 5, pageWidth - 30, 55, 3, 3, 'F');
  
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(primaryBlue[0], primaryBlue[1], primaryBlue[2]);
  doc.text('Customer Information', 20, yPos + 5);
  
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(darkGray[0], darkGray[1], darkGray[2]);
  
  yPos += 15;
  const col1X = 25;
  const col2X = 110;
  
  doc.setFont('helvetica', 'bold');
  doc.text('Name:', col1X, yPos);
  doc.setFont('helvetica', 'normal');
  doc.text(data.name, col1X + 25, yPos);
  
  doc.setFont('helvetica', 'bold');
  doc.text('Phone:', col2X, yPos);
  doc.setFont('helvetica', 'normal');
  doc.text(data.phone || 'Not provided', col2X + 25, yPos);
  
  yPos += 10;
  doc.setFont('helvetica', 'bold');
  doc.text('Email:', col1X, yPos);
  doc.setFont('helvetica', 'normal');
  doc.text(data.email, col1X + 25, yPos);
  
  doc.setFont('helvetica', 'bold');
  doc.text('Contact:', col2X, yPos);
  doc.setFont('helvetica', 'normal');
  doc.text(data.contactMethod || 'Email', col2X + 25, yPos);
  
  yPos += 10;
  doc.setFont('helvetica', 'bold');
  doc.text('Travelers:', col1X, yPos);
  doc.setFont('helvetica', 'normal');
  const travelers = `${data.adults || '1'} Adults, ${data.children || '0'} Children, ${data.infants || '0'} Infants`;
  doc.text(travelers, col1X + 35, yPos);
  
  // Trip Details Section
  yPos += 30;
  doc.setFillColor(245, 247, 250);
  doc.roundedRect(15, yPos - 5, pageWidth - 30, 70, 3, 3, 'F');
  
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(tealColor[0], tealColor[1], tealColor[2]);
  doc.text('Trip Details', 20, yPos + 5);
  
  doc.setFontSize(10);
  doc.setTextColor(darkGray[0], darkGray[1], darkGray[2]);
  
  yPos += 15;
  
  // Destination highlight
  doc.setFillColor(tealColor[0], tealColor[1], tealColor[2]);
  doc.roundedRect(col1X - 5, yPos - 5, 80, 15, 2, 2, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.text(`📍 ${data.destination}`, col1X, yPos + 5);
  
  doc.setTextColor(darkGray[0], darkGray[1], darkGray[2]);
  doc.setFont('helvetica', 'bold');
  doc.text('Trip Type:', col2X, yPos);
  doc.setFont('helvetica', 'normal');
  doc.text(formatTripType(data.tripType) || 'Not specified', col2X + 35, yPos);
  
  yPos += 15;
  doc.setFont('helvetica', 'bold');
  doc.text('Departure:', col1X, yPos);
  doc.setFont('helvetica', 'normal');
  doc.text(formatDate(data.travelDate), col1X + 35, yPos);
  
  doc.setFont('helvetica', 'bold');
  doc.text('Return:', col2X, yPos);
  doc.setFont('helvetica', 'normal');
  doc.text(formatDate(data.returnDate) || 'Flexible', col2X + 25, yPos);
  
  yPos += 10;
  doc.setFont('helvetica', 'bold');
  doc.text('Budget:', col1X, yPos);
  doc.setFont('helvetica', 'normal');
  doc.text(formatBudget(data.budget) || 'Not specified', col1X + 25, yPos);
  
  doc.setFont('helvetica', 'bold');
  doc.text('Accommodation:', col2X, yPos);
  doc.setFont('helvetica', 'normal');
  doc.text(formatAccommodation(data.accommodation) || 'Not specified', col2X + 45, yPos);
  
  // Additional Details Section
  if (data.additionalDetails) {
    yPos += 30;
    doc.setFillColor(255, 251, 235);
    doc.roundedRect(15, yPos - 5, pageWidth - 30, 40, 3, 3, 'F');
    
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(primaryBlue[0], primaryBlue[1], primaryBlue[2]);
    doc.text('Special Requests', 20, yPos + 5);
    
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(darkGray[0], darkGray[1], darkGray[2]);
    
    yPos += 15;
    const splitText = doc.splitTextToSize(data.additionalDetails, pageWidth - 50);
    doc.text(splitText.slice(0, 3), col1X, yPos);
  }
  
  // Footer
  const footerY = 270;
  doc.setDrawColor(200, 200, 200);
  doc.line(15, footerY - 10, pageWidth - 15, footerY - 10);
  
  doc.setFontSize(9);
  doc.setTextColor(lightGray[0], lightGray[1], lightGray[2]);
  doc.text('TravStaytion | Your Journey, Our Passion', 20, footerY);
  doc.text('📞 +91 99999 59915 | ✉️ holidays@travstaytion.com', 20, footerY + 8);
  doc.text('🌐 www.travstaytion.com', 20, footerY + 16);
  
  doc.setFontSize(8);
  doc.text('GST: 09DPCPK2869P1Z3', pageWidth - 55, footerY + 8);
  
  // Convert to buffer
  const pdfOutput = doc.output('arraybuffer');
  return Buffer.from(pdfOutput);
}

// Helper functions
function formatDate(dateStr: string): string {
  if (!dateStr) return 'Not specified';
  try {
    return new Date(dateStr).toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  } catch {
    return dateStr;
  }
}

function formatTripType(type: string): string {
  const types: Record<string, string> = {
    'honeymoon': 'Honeymoon',
    'family': 'Family Vacation',
    'adventure': 'Adventure Travel',
    'luxury': 'Luxury Escape',
    'business': 'Business + Leisure',
    'solo': 'Solo Travel'
  };
  return types[type] || type;
}

function formatBudget(budget: string): string {
  const budgets: Record<string, string> = {
    'economy': '₹40K - ₹80K',
    'standard': '₹80K - ₹1.5L',
    'premium': '₹1.5L - ₹2.5L',
    'luxury': '₹2.5L+'
  };
  return budgets[budget] || budget;
}

function formatAccommodation(acc: string): string {
  const accommodations: Record<string, string> = {
    '3star': '3-Star Hotels',
    '4star': '4-Star Hotels',
    '5star': '5-Star Luxury',
    'boutique': 'Boutique Hotels',
    'resort': 'Beach Resorts',
    'villa': 'Private Villas'
  };
  return accommodations[acc] || acc;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  
  const { name, email, phone, destination, details } = req.body;
  
  if (!name || !email || !destination) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  
  // Parse details string to extract individual fields
  const detailsObj: Record<string, string> = {};
  if (details) {
    details.split('\n').forEach((line: string) => {
      const [key, ...valueParts] = line.split(':');
      if (key && valueParts.length) {
        detailsObj[key.trim().toLowerCase().replace(/\s+/g, '')] = valueParts.join(':').trim();
      }
    });
  }
  
  const quoteData = {
    name,
    email,
    phone: phone || '',
    destination,
    contactMethod: detailsObj['contactmethod'] || 'email',
    adults: detailsObj['adults'] || '1',
    children: detailsObj['children'] || '0',
    infants: detailsObj['infants'] || '0',
    travelDate: detailsObj['traveldate'] || '',
    returnDate: detailsObj['returndate'] || '',
    budget: detailsObj['budget'] || '',
    tripType: detailsObj['triptype'] || '',
    accommodation: detailsObj['accommodation'] || '',
    additionalDetails: detailsObj['additionaldetails'] || '',
  };
  
  const client = new Client(clientConfig);
  
  try {
    // Save to database
    await client.connect();
    await client.query(
      'INSERT INTO quote (name, email, phone, destination, details) VALUES ($1, $2, $3, $4, $5)',
      [name, email, phone, destination, details]
    );
    
    // Generate PDF
    const pdfBuffer = generateQuotePDF(quoteData);
    
    // Send email with PDF attachment
    try {
      const transporter = await createTransporter();
      
      if (!transporter) {
        console.log('Email transporter not available - skipping emails');
      } else {
        console.log('Attempting to send emails...');
        
        // Email to owner
        await transporter.sendMail({
          from: '"TravStaytion" <holidays@travstaytion.com>',
          to: 'holidays@travstaytion.com',
          subject: `📋 New Quote Request: ${name} - ${destination}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <div style="background: linear-gradient(135deg, #2563eb 0%, #14b8a6 100%); padding: 20px; text-align: center;">
              <h1 style="color: white; margin: 0;">New Quote Request!</h1>
            </div>
            <div style="padding: 20px; background: #f9fafb;">
              <h2 style="color: #1f2937;">Customer Details</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;"><strong>Name:</strong></td><td>${name}</td></tr>
                <tr><td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;"><strong>Email:</strong></td><td>${email}</td></tr>
                <tr><td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;"><strong>Phone:</strong></td><td>${phone || 'Not provided'}</td></tr>
                <tr><td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;"><strong>Destination:</strong></td><td style="color: #14b8a6; font-weight: bold;">${destination}</td></tr>
                <tr><td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;"><strong>Travel Date:</strong></td><td>${formatDate(quoteData.travelDate)}</td></tr>
                <tr><td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;"><strong>Budget:</strong></td><td>${formatBudget(quoteData.budget) || 'Not specified'}</td></tr>
              </table>
              <p style="margin-top: 20px; color: #6b7280;">📎 See attached PDF for complete details.</p>
            </div>
          </div>
        `,
        attachments: [
          {
            filename: `TravStaytion_Quote_${name.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.pdf`,
            content: pdfBuffer,
            contentType: 'application/pdf',
          },
        ],
      });
      
      // Confirmation email to customer
      await transporter.sendMail({
        from: '"TravStaytion" <holidays@travstaytion.com>',
        to: email,
        subject: `Your Travel Quote Request - ${destination}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #2563eb 0%, #14b8a6 100%); padding: 30px; text-align: center;">
              <h1 style="color: white; margin: 0;">TravStaytion</h1>
              <p style="color: rgba(255,255,255,0.9); margin: 5px 0 0;">Your Journey, Our Passion</p>
            </div>
            <div style="padding: 30px; background: #ffffff;">
              <h2 style="color: #1f2937;">Thank You, ${name}! 🎉</h2>
              <p style="color: #4b5563; line-height: 1.6;">
                We've received your travel quote request for <strong style="color: #14b8a6;">${destination}</strong>. 
                Our travel experts are already working on creating the perfect itinerary for you!
              </p>
              <div style="background: #f3f4f6; padding: 20px; border-radius: 10px; margin: 20px 0;">
                <h3 style="color: #2563eb; margin-top: 0;">What's Next?</h3>
                <ul style="color: #4b5563; line-height: 1.8;">
                  <li>Our team will review your requirements</li>
                  <li>We'll create a customized travel package</li>
                  <li>You'll receive a detailed quote within 24 hours</li>
                </ul>
              </div>
              <p style="color: #4b5563;">
                📎 Find attached a copy of your quote request for your records.
              </p>
              <p style="color: #4b5563; margin-top: 20px;">
                Have questions? Reach out to us anytime!<br>
                📞 <a href="tel:+919999959915" style="color: #2563eb;">+91 99999 59915</a><br>
                💬 <a href="https://wa.me/919999959915" style="color: #25D366;">WhatsApp Us</a>
              </p>
            </div>
            <div style="background: #1f2937; padding: 20px; text-align: center;">
              <p style="color: rgba(255,255,255,0.7); margin: 0; font-size: 12px;">
                © ${new Date().getFullYear()} TravStaytion. All rights reserved.<br>
                GST: 09DPCPK2869P1Z3
              </p>
            </div>
          </div>
        `,
        attachments: [
          {
            filename: `TravStaytion_Quote_${destination.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.pdf`,
            content: pdfBuffer,
            contentType: 'application/pdf',
          },
        ],
      });
      
        console.log('Emails sent successfully');
      }
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      // Don't fail the request if email fails
    }
    
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Quote submission error:', error);
    res.status(500).json({ error: 'Database error', details: (error as Error).message });
  } finally {
    await client.end();
  }
}
