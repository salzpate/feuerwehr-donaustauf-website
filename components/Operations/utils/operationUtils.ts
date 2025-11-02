function getCategoryColor(category: string): string {
  switch (category) {
    case 'Brände':
      return '#fdd49e';
    case 'First Responder THL':
      return '#ff6b6b';
    case 'Sicherheitswache':
      return '#d9f0a3';
    case 'THL':
      return '#95e1d3';
    case 'Verkehrsabsicherung':
      return '#ece7f2';
    case 'Wasserdienst':
      return '#74a9cf';
    default:
      return '#f38181';
  }
};

export { getCategoryColor };
