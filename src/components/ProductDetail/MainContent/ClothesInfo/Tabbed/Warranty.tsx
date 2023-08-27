import { GiAutoRepair } from "react-icons/gi";
import { BiShoppingBag } from "react-icons/bi";
import { RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Warranty() {
  return (
    <div className="col-span-full flex flex-col gap-6 px-8 pl-24">
      <div className="flex items-center gap-6">
        <div className="h-12 w-12 bg-[#fed25d] flex-center rounded-lg">
          <GiAutoRepair className="text-3xl" />
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-1">
            HOW DO ONLINE REPAIRS WORK?
          </h3>
          <p className="text-slate-700">
            First, your item is assessed by one of our Care Experts, who will send
            you an estimate for the repair.
          </p>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className="h-12 w-12 bg-[#fed25d] flex-center rounded-lg">
          <BiShoppingBag className="text-2xl" />
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-1">
            WHICH PRODUCTS ARE ELIGIBLE FOR ONLINE REPAIRS?
          </h3>
          <p className="text-slate-700">
            All Lighthouse leather goods and accessories are eligible.
            Unfortunately, we are not able to accept ready-to-wear for repair.
          </p>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className="h-12 w-12 bg-[#fed25d] flex-center rounded-lg">
          <RiMoneyDollarCircleLine className="text-2xl" />
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-1">HOW MUCH DOES IT COST?</h3>
          <p className="text-slate-700">
            Our Care Experts provide an estimate first before proceeding with any
            repair, allowing you to decide if you wish to accept and continue.
          </p>
        </div>
      </div>
    </div>
  );
}
