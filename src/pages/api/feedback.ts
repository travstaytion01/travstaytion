import type { NextApiRequest, NextApiResponse } from 'next';
import { Client } from 'pg';
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
const createTransporter = () => {
  const smtpPass = process.env.SMTP_PASS;
  
  if (!smtpPass) {
    console.warn('SMTP_PASS not configured - emails will not be sent');
    return null;
  }
  
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.hostinger.com',
    port: parseInt(process.env.SMTP_PORT || '465'),
    secure: true,
    auth: {
      user: process.env.SMTP_USER || 'holidays@travstaytion.com',
      pass: smtpPass,
    },
    // Add connection timeout
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 15000,
  });
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  const client = new Client(clientConfig);
  try {
    // Save to database
    await client.connect();
    await client.query(
      'INSERT INTO feedback (name, email, message) VALUES ($1, $2, $3)',
      [name, email, message]
    );
    
    // Send email notifications
    try {
      const transporter = createTransporter();
      
      if (!transporter) {
        console.log('Email transporter not available - skipping emails');
      } else {
        console.log('Sending feedback emails...');
        
        // Email to owner with feedback details
        await transporter.sendMail({
          from: '"TravStaytion" <holidays@travstaytion.com>',
          to: 'holidays@travstaytion.com',
          subject: `💬 New Feedback from ${name}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <div style="background: linear-gradient(135deg, #2563eb 0%, #14b8a6 100%); padding: 25px; text-align: center;">
                <h1 style="color: white; margin: 0;">New Customer Feedback!</h1>
              </div>
              <div style="padding: 25px; background: #f9fafb;">
                <div style="background: white; border-radius: 12px; padding: 20px; border-left: 4px solid #14b8a6;">
                  <h2 style="color: #1f2937; margin-top: 0;">Customer Details</h2>
                  <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                      <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; width: 100px;"><strong>👤 Name:</strong></td>
                      <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">${name}</td>
                    </tr>
                    <tr>
                      <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;"><strong>📧 Email:</strong></td>
                      <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;"><a href="mailto:${email}" style="color: #2563eb;">${email}</a></td>
                    </tr>
                </table>
              </div>
              
              <div style="background: white; border-radius: 12px; padding: 20px; margin-top: 20px; border-left: 4px solid #2563eb;">
                <h3 style="color: #1f2937; margin-top: 0;">📝 Feedback Message:</h3>
                <p style="color: #4b5563; line-height: 1.6; background: #f3f4f6; padding: 15px; border-radius: 8px;">${message}</p>
              </div>
              
              <p style="margin-top: 20px; color: #6b7280; font-size: 14px;">
                📅 Received on: ${new Date().toLocaleString('en-IN', { dateStyle: 'full', timeStyle: 'short' })}
              </p>
            </div>
            <div style="background: #1f2937; padding: 15px; text-align: center;">
              <p style="color: rgba(255,255,255,0.7); margin: 0; font-size: 12px;">
                TravStaytion Feedback System
              </p>
            </div>
          </div>
        `,
      });
      
      // Confirmation email to customer
      await transporter.sendMail({
        from: '"TravStaytion" <holidays@travstaytion.com>',
        to: email,
        subject: `Thank you for your feedback, ${name}!`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #2563eb 0%, #14b8a6 100%); padding: 30px; text-align: center;">
              <h1 style="color: white; margin: 0;">TravStaytion</h1>
              <p style="color: rgba(255,255,255,0.9); margin: 5px 0 0;">Your Journey, Our Passion</p>
            </div>
            <div style="padding: 30px; background: #ffffff;">
              <h2 style="color: #1f2937;">Thank You, ${name}! 🙏</h2>
              <p style="color: #4b5563; line-height: 1.6;">
                We truly appreciate you taking the time to share your feedback with us. Your thoughts help us improve and serve you better!
              </p>
              
              <div style="background: #f0fdf4; padding: 20px; border-radius: 10px; margin: 20px 0; border-left: 4px solid #22c55e;">
                <h3 style="color: #166534; margin-top: 0;">✅ We've Received Your Feedback</h3>
                <p style="color: #4b5563; margin-bottom: 0;">
                  Our team will review your message and get back to you if needed.
                </p>
              </div>
              
              <div style="background: #f3f4f6; padding: 15px; border-radius: 8px; margin: 20px 0;">
                <p style="color: #6b7280; margin: 0; font-size: 14px;"><strong>Your message:</strong></p>
                <p style="color: #4b5563; font-style: italic; margin: 10px 0 0;">"${message}"</p>
              </div>
              
              <p style="color: #4b5563; margin-top: 25px;">
                Want to plan your next adventure? We're here to help!<br>
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
        
        console.log('Feedback emails sent successfully');
      }
    } catch (emailError) {
      console.error('Feedback email sending failed:', emailError);
      // Don't fail the request if email fails
    }
    
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Database error', details: (error as Error).message });
  } finally {
    await client.end();
  }
}
