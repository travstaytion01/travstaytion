import type { NextApiRequest, NextApiResponse } from 'next';
import { Client } from 'pg';
import nodemailer from 'nodemailer';

// Database configuration
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
  
  if (!smtpPass) {
    console.warn('SMTP_PASS not configured - emails will not be sent');
    return null;
  }
  
  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
    tls: {
      rejectUnauthorized: false,
    },
    connectionTimeout: 30000,
    greetingTimeout: 30000,
    socketTimeout: 60000,
  });
  
  try {
    await transporter.verify();
    return transporter;
  } catch (verifyError) {
    console.error('SMTP verification failed:', verifyError);
    return transporter;
  }
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, packageName, packageId, travelDate, travelers, message } = req.body;

  if (!name || !email || !phone) {
    return res.status(400).json({ error: 'Name, email, and phone are required' });
  }

  let ownerEmailSent = false;
  let customerEmailSent = false;
  let dbSaved = false;

  // PRIORITY 1: Send emails first (core functionality)
  const transporter = await createTransporter();
  
  if (transporter) {
    // Email to owner (separate try-catch)
    try {
      await transporter.sendMail({
        from: '"TravStaytion" <holidays@travstaytion.com>',
        to: 'holidays@travstaytion.com',
        subject: `🎯 New Package Inquiry: ${packageName || 'General'}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #2563eb 0%, #14b8a6 100%); padding: 25px; text-align: center;">
              <img src="https://travstaytion.com/image.png" alt="TravStaytion" style="max-width: 180px; height: auto; margin-bottom: 10px;" />
              <h1 style="color: white; margin: 0; font-size: 20px;">New Package Inquiry!</h1>
            </div>
            <div style="padding: 25px; background: #f9fafb;">
              <div style="background: white; border-radius: 12px; padding: 20px; border-left: 4px solid #14b8a6;">
                <h2 style="color: #1f2937; margin-top: 0;">Customer Details</h2>
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;"><strong>👤 Name:</strong></td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">${name}</td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;"><strong>📧 Email:</strong></td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;"><a href="mailto:${email}" style="color: #2563eb;">${email}</a></td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;"><strong>📞 Phone:</strong></td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;"><a href="tel:${phone}" style="color: #2563eb;">${phone}</a></td>
                  </tr>
                </table>
              </div>
              
              <div style="background: white; border-radius: 12px; padding: 20px; margin-top: 20px; border-left: 4px solid #2563eb;">
                <h3 style="color: #1f2937; margin-top: 0;">📦 Package Details</h3>
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 8px 0;"><strong>Package:</strong></td>
                    <td style="padding: 8px 0; color: #14b8a6; font-weight: bold;">${packageName || 'Not specified'}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0;"><strong>Travel Date:</strong></td>
                    <td style="padding: 8px 0;">${travelDate || 'Not specified'}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0;"><strong>Travelers:</strong></td>
                    <td style="padding: 8px 0;">${travelers || 'Not specified'}</td>
                  </tr>
                </table>
                ${message ? `<p style="color: #4b5563; margin-top: 15px; background: #f3f4f6; padding: 12px; border-radius: 8px;"><strong>Message:</strong><br>${message}</p>` : ''}
              </div>
              
              <p style="margin-top: 20px; color: #6b7280; font-size: 14px;">
                📅 Received on: ${new Date().toLocaleString('en-IN', { dateStyle: 'full', timeStyle: 'short' })}
              </p>
            </div>
          </div>
        `,
      });
      ownerEmailSent = true;
      console.log('Owner email sent successfully');
    } catch (ownerEmailError) {
      console.error('Owner email failed:', ownerEmailError);
    }

    // Confirmation email to customer (separate try-catch - independent of owner email)
    try {
      await transporter.sendMail({
        from: '"TravStaytion" <holidays@travstaytion.com>',
        to: email,
        replyTo: 'holidays@travstaytion.com',
        subject: `Your inquiry for ${packageName || 'travel package'} received!`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #2563eb 0%, #14b8a6 100%); padding: 30px; text-align: center;">
              <img src="https://travstaytion.com/image.png" alt="TravStaytion" style="max-width: 180px; height: auto; margin-bottom: 10px;" />
              <p style="color: rgba(255,255,255,0.9); margin: 5px 0 0;">Your Journey, Our Passion</p>
            </div>
            <div style="padding: 30px; background: #ffffff;">
              <h2 style="color: #1f2937;">Thank You, ${name}! 🎉</h2>
              <p style="color: #4b5563; line-height: 1.6;">
                We've received your inquiry for <strong style="color: #14b8a6;">${packageName || 'our travel package'}</strong>. 
                Our travel experts will contact you within 24 hours with personalized options!
              </p>
              
              <div style="background: #f0fdf4; padding: 20px; border-radius: 10px; margin: 20px 0; border-left: 4px solid #22c55e;">
                <h3 style="color: #166534; margin-top: 0;">✅ Inquiry Received</h3>
                <p style="color: #4b5563; margin-bottom: 0;">
                  ${travelDate ? `<strong>Preferred Date:</strong> ${travelDate}<br>` : ''}
                  ${travelers ? `<strong>Travelers:</strong> ${travelers}` : ''}
                </p>
              </div>
              
              <p style="color: #4b5563; margin-top: 25px;">
                Need immediate assistance?<br>
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
      });
      customerEmailSent = true;
      console.log('Customer confirmation email sent successfully');
    } catch (customerEmailError) {
      console.error('Customer email failed:', customerEmailError);
    }
  }

  // PRIORITY 2: Try to save to database (secondary)
  const client = new Client(clientConfig);
  try {
    await client.connect();

    // Create table if it doesn't exist
    await client.query(`
      CREATE TABLE IF NOT EXISTS package_inquiry (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(50) NOT NULL,
        package_name VARCHAR(255),
        package_id INTEGER,
        travel_date DATE,
        travelers VARCHAR(50),
        message TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Insert the inquiry
    await client.query(
      `INSERT INTO package_inquiry (name, email, phone, package_name, package_id, travel_date, travelers, message) 
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
      [name, email, phone, packageName, packageId, travelDate || null, travelers, message]
    );

    dbSaved = true;
  } catch (dbError) {
    console.error('Database error:', dbError);
  } finally {
    try {
      await client.end();
    } catch (e) {
      // Ignore close errors
    }
  }

  // Return success if email was sent OR db saved
  if (ownerEmailSent || customerEmailSent || dbSaved) {
    return res.status(200).json({ 
      success: true, 
      message: 'Your inquiry has been submitted successfully!'
    });
  }

  // Both failed
  return res.status(500).json({ 
    error: 'Failed to process your request. Please try again or contact us directly at +91 99999 59915'
  });
}
