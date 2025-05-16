
export const useActions = () => {
  const redirectToTally = () => {
    window.location.href = 'https://tally.so/r/3j2D0Q';
  };

  // All action handlers now redirect to the Tally form
  const handleGetStarted = redirectToTally;
  const handleScheduleDemo = redirectToTally;
  const handleContactUs = redirectToTally;
  const handleFreeTrial = redirectToTally;
  const handleContactSales = redirectToTally;

  return {
    handleGetStarted,
    handleScheduleDemo,
    handleContactUs,
    handleFreeTrial,
    handleContactSales
  };
};
