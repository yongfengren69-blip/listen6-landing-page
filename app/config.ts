export const siteConfig = {
  whatsappNumber: "REPLACE_WITH_YOUR_WHATSAPP_NUMBER",
  ctaMessages: {
    hero: "Hi, I'm interested in learning more about the paid listening business.",
    opportunity: "Hi, I'm interested in starting my own paid listening business.",
    final: "Hi, I'd like to learn how Listen6 can help me build my listening business.",
  },
};

export const getWhatsAppLink = (message: string) =>
  `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
