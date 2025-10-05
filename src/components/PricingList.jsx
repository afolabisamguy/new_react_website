import { check, brainwaveSymbol } from "../assets";
import { pricing } from "../constants";
import Button from "./Button";

const PricingList = () => {
  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap">
      {pricing.map((item) => (
        <div
          key={item.id}
          className="relative w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3"
        >
          {/* Icon + text container */}
          <div className="relative mb-4 pl-10">
            {/* Icon positioned center-left */}
            <div className="absolute -left-2 top-1/2 -translate-y-1/2 flex items-center justify-center w-[2.25rem] h-[2.25rem] bg-color-5 rounded-[0.75rem]">
              <img
                src={brainwaveSymbol}
                width={26}
                height={26}
                alt="MyAgent"
              />
            </div>

            <div>
              <h4 className="h4 mb-1">{item.title}</h4>
              <p className="body-2 text-n-1/50">{item.description}</p>
            </div>
          </div>

          {/* Features list */}
          <ul>
            {item.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start py-5 border-t border-n-6"
              >
                <img src={check} width={24} height={24} alt="Check" />
                <p className="body-2 ml-4">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PricingList;
