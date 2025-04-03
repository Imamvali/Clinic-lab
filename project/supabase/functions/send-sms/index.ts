import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';

const FAST2SMS_API_KEY = Deno.env.get('FAST2SMS_API_KEY');
const LAB_PHONE_NUMBER = '9100166963';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS'
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const { name, test, date, time } = await req.json();

    // Format the message
    const message = `New Appointment:\nPatient: ${name}\nTest: ${test}\nDate: ${date}\nTime: ${time}`;

    // Send SMS using Fast2SMS API
    const smsResponse = await fetch('https://www.fast2sms.com/dev/bulkV2', {
      method: 'POST',
      headers: {
        'authorization': FAST2SMS_API_KEY,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        route: 'q',
        message: message,
        numbers: LAB_PHONE_NUMBER,
      })
    });

    const smsResult = await smsResponse.json();

    if (!smsResult.return) {
      throw new Error('Failed to send SMS');
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Appointment booked and notification sent' }),
      { 
        headers: { 
          ...corsHeaders,
          'Content-Type': 'application/json'
        }
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { 
        headers: { 
          ...corsHeaders,
          'Content-Type': 'application/json'
        },
        status: 400
      }
    );
  }
});