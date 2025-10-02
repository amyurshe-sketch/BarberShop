const fetch = require('node-fetch');

module.exports = async (req, res) => {
  // Разрешаем CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  if (req.method === 'POST') {
    try {
      const { name, phone, service, message } = req.body;
      
      const text = `📌 Новая заявка с сайта:\n\n👤 Имя: ${name}\n📞 Телефон: ${phone}\n✂️ Услуга: ${service}\n💬 Сообщение: ${message || 'Без дополнительных пожеланий'}\n\n🌐 Источник: Демо-сайт барбершопа`;
      
      const telegramResponse = await fetch(`https://api.telegram.org/bot7937469020:AAHk33stXSsPwtgXvLqNFN5JQwwAEYIAuLI/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: '7704061401',
          text: text,
          parse_mode: 'HTML'
        })
      });
      
      const result = await telegramResponse.json();
      
      if (result.ok) {
        res.status(200).json({ status: 'success', message: 'Заявка отправлена!' });
      } else {
        console.error('Telegram API error:', result);
        res.status(500).json({ status: 'error', message: 'Ошибка Telegram API' });
      }
      
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ status: 'error', message: 'Ошибка сервера' });
    }
  } else {
    res.status(405).json({ status: 'error', message: 'Method not allowed' });
  }
};
