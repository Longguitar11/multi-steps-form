const ThankYou = () => {
  return (
    <div className="m-auto space-y-5 text-center">
      <img
        className="mx-auto w-16"
        src="/img/icon-thank-you.svg"
        alt="icon-checkmark"
      />
      <p className="text-2xl font-bold">Thank you!</p>
      <p className="text-sm leading-relaxed text-gray-400">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If your ever need support, please feel free to email us at
        support@loremgaming.com
      </p>
    </div>
  );
};

export default ThankYou;
