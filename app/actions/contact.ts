'use server';

export async function submitContactForm(formData: FormData) {
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const company = formData.get('company');
    const projectDescription = formData.get('projectDescription');

    const webhookUrl = process.env.N8N_WEBHOOK_URL;

    if (!webhookUrl) {
        console.error('N8N_WEBHOOK_URL is not defined');
        return { success: false, message: 'Server configuration error.' };
    }

    try {
        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                phone,
                company,
                projectDescription,
                submittedAt: new Date().toISOString(),
            }),
        });

        if (!response.ok) {
            // Log the error for debugging but return a generic message to the user
            const errorText = await response.text();
            console.error('n8n webhook error:', response.status, errorText);
            throw new Error(`External service error: ${response.status}`);
        }

        return { success: true, message: 'Message sent successfully!' };
    } catch (error) {
        console.error('Form submission error:', error);
        return { success: false, message: 'Failed to send message. Please try again later.' };
    }
}
