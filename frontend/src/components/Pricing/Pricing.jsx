import { Button } from "@/components/ui/button";
import React from "react";
export default function Pricing() {
  return (
    <div className="px-4 py-8 sm:px-8 md:px-12 lg:px-16 xl:px-20">
      <div className="flex flex-col items-center justify-center mb-12 py-16 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
          Avoid binding contracts and secret fees
        </h2>
        <p className="text-lg md:text-xl text-gray-500 text-center">
          Take advantage of straightforward pricing
        </p>
      </div>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {/* Starter Plan */}
        <div className="flex flex-col rounded-lg border border-gray-200 shadow-md">
          <div className="grid gap-4 p-6">
            <h3 className="text-xl font-semibold">Starter</h3>
            <p className="text-sm leading-6 text-gray-500">
              Perfect for individuals getting started
            </p>
            <div className="text-4xl font-semibold">$9</div>
            <div className="grid gap-2 text-sm">
              <p className="flex items-center gap-2">
                <CircleCheckIcon className="w-4 h-4" />
                Unlimited projects
              </p>
              <p className="flex items-center gap-2">
                <CircleCheckIcon className="w-4 h-4" />
                Custom domain support
              </p>
              <p className="flex items-center gap-2">
                <CircleCheckIcon className="w-4 h-4" />
                Advanced analytics
              </p>
            </div>
          </div>
          <div className="p-4 border-t grid gap-2">
            <Button size="lg">Select</Button>
          </div>
        </div>

        {/* Pro Plan */}
        <div className="flex flex-col rounded-lg border border-gray-200 shadow-md">
          <div className="grid gap-4 p-6">
            <h3 className="text-xl font-semibold">Pro</h3>
            <p className="text-sm leading-6 text-gray-500">
              For teams shipping quality projects
            </p>
            <div className="text-4xl font-semibold">$19</div>
            <div className="grid gap-2 text-sm">
              <p className="flex items-center gap-2">
                <CircleCheckIcon className="w-4 h-4" />
                Everything in Starter
              </p>
              <p className="flex items-center gap-2">
                <CircleCheckIcon className="w-4 h-4" />
                24/7 support
              </p>
              <p className="flex items-center gap-2">
                <CircleCheckIcon className="w-4 h-4" />
                Team collaboration
              </p>
            </div>
          </div>
          <div className="p-4 border-t grid gap-2">
            <Button size="lg">Select</Button>
          </div>
        </div>

        {/* Enterprise Plan */}
        <div className="flex flex-col rounded-lg border border-gray-200 shadow-md">
          <div className="grid gap-4 p-6">
            <h3 className="text-xl font-semibold">Enterprise</h3>
            <p className="text-sm leading-6 text-gray-500">
              Advanced features for large organizations
            </p>
            <div className="text-4xl font-semibold">$49</div>
            <div className="grid gap-2 text-sm">
              <p className="flex items-center gap-2">
                <CircleCheckIcon className="w-4 h-4" />
                Everything in Pro
              </p>
              <p className="flex items-center gap-2">
                <CircleCheckIcon className="w-4 h-4" />
                Priority support
              </p>
              <p className="flex items-center gap-2">
                <CircleCheckIcon className="w-4 h-4" />
                SSO and security features
              </p>
            </div>
          </div>
          <div className="p-4 border-t grid gap-2">
            <Button size="lg">Contact sales</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function CircleCheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
