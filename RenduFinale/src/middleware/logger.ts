import winston, { transports, createLogger, format } from 'winston';

// Configuration du logger
const logger = createLogger({
  level: 'info', // Niveau minimum des logs à afficher (par exemple, 'info', 'error', 'debug')
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.printf(({ timestamp, level, message }) => {
      return `${timestamp} ${level}: ${message}`;
    })
  ),
  transports: [
    new transports.Console(), // Afficher les logs dans la console
    new transports.File({ filename: 'logs/app.log' }) // Enregistrer les logs dans un fichier
  ],
});

export default logger;
