const totalMinusPercentage = (total, percentage) => {
  return (total - (percentage / 100) * total).toFixed(2);
};

export default totalMinusPercentage;
