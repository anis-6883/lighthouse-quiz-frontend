'use client';
import Link from 'next/link';
import { FaFileContract, FaHeadphonesAlt } from 'react-icons/fa';
import {
  FaMagnifyingGlass,
  FaShieldHalved,
  FaUsersLine,
} from 'react-icons/fa6';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import EmptyCard from './EmptyCard';
import FaqCard from './FaqCard';
export default function HelpCenterTab() {
  return (
    <Tabs>
      <TabList className="grid w-full grid-cols-2 text-center ">
        <Tab className="cursor-pointer border-b-[3px] p-5 text-base font-semibold text-[#9e9e9e] sm:text-lg">
          FAQ
        </Tab>
        <Tab className="cursor-pointer border-b-[3px] p-5 text-base font-semibold text-[#9e9e9e] sm:text-lg">
          General
        </Tab>
      </TabList>

      <TabPanel>
        <div className="mb-4 mt-6 flex items-center gap-4 rounded-xl border bg-[#F3F0FF] px-6 py-3">
          <FaMagnifyingGlass className="text-xl text-[var(--primary-color)]" />
          <input
            className="w-full border-none bg-[#F3F0FF] py-2 outline-none"
            type="text"
            style={{ boxShadow: 'none' }}
          />
        </div>
        <div className="flex flex-col gap-4">
          <FaqCard
            question="Do you offer any discounts or promotions?"
            answer="We may offer discounts or promotions from time to time. To stay
        up-to-date on the latest deals and special offers, you can sign up for
        the newsletter or follow it on social media."
          />
          <FaqCard
            question="Do you offer any Extra Quiz?"
            answer="We may offer discounts or promotions from time to time. To stay
        up-to-date on the latest deals and special offers."
          />
          {/* if any faq not found  */}
          <EmptyCard name="FAQ" />
        </div>
      </TabPanel>
      <TabPanel>
        <h6 className="py-8 text-xl font-medium">Quizzes</h6>
        <div className="flex flex-col gap-5 ">
          <div className="w-full rounded-xl border shadow-sm">
            <Link href="/home">
              <div className="flex items-center gap-4 p-6">
                <FaUsersLine className="text-4xl" />
                <span className="text-xl font-semibold capitalize sm:text-2xl">
                  About Us
                </span>
              </div>
            </Link>
          </div>
          <div className="w-full rounded-xl border shadow-sm">
            <Link href="/home">
              <div className="flex items-center gap-4 p-6">
                <FaFileContract className="text-3xl" />
                <span className="text-xl font-semibold capitalize sm:text-2xl">
                  Terms & Conditions
                </span>
              </div>
            </Link>
          </div>

          <div className="w-full rounded-xl border shadow-sm">
            <Link href="/home">
              <div className="flex items-center gap-4 p-6">
                <FaShieldHalved className="text-3xl" />
                <span className="text-xl font-semibold capitalize sm:text-2xl">
                  Privacy Policy
                </span>
              </div>
            </Link>
          </div>
          <div className="w-full rounded-xl border shadow-sm">
            <Link href="/home">
              <div className="flex items-center gap-4 p-6">
                <FaHeadphonesAlt className="text-3xl" />
                <span className="text-xl font-semibold capitalize sm:text-2xl">
                  Contact Us
                </span>
              </div>
            </Link>
          </div>
        </div>
      </TabPanel>
    </Tabs>
  );
}