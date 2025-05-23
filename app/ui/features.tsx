import HandHoldingStarIcon from "../../public/icons/hand-holding-star.svg";
import AwardIcon from "../../public/icons/award.svg";
import CubeIcon from "../../public/icons/cube.svg";
import PhoneConfigurationIcon from "../../public/icons/phone-configuration.svg";

const features = [
  {
    name: "High Quality",
    description: "crafted from top materials",
    icon: HandHoldingStarIcon,
  },
  {
    name: "Warrany Protection",
    description: "Over 2 years",
    icon: AwardIcon,
  },
  {
    name: "Free Shipping",
    description: "Order over 150 $",
    icon: CubeIcon,
  },
  {
    name: "24 / 7 Support",
    description: "Dedicated support",
    icon: PhoneConfigurationIcon,
  },
];

export default function Features() {
  return (
    <div className="w-full bg-white shadow-[0px_20px_52.2889px_rgba(68,68,68,0.04)]">
      <div className="box lg:py-18">
        <ul className="grid grid-cols-1 gap-x-29 text-nowrap sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <li key={feature.name}>
              <div className="flex min-w-0 items-center gap-x-[0.8125rem]">
                <feature.icon
                  aria-hidden="true"
                  className="size-12.5 flex-none text-indigo-600"
                />
                <div className="min-w-0 flex-auto text-left">
                  <p className="text-xl leading-[1.875rem] font-medium text-[#484848] not-italic">
                    {feature.name}
                  </p>
                  <p className="text-base leading-6.5 font-normal text-[#484848] not-italic">
                    {feature.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
