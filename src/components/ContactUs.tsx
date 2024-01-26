import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import * as React from "react";
type ContactProps = {
  showPopUp: (value: boolean) => void;
};
const ContactUs = (props: ContactProps) => {
  const { showPopUp } = props;
  const [open, setOpen] = useState(true);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all  w-[700px]  sm:p-6 text-sm">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full  ">
                  <img
                    src="https://www.rbcroyalbank.com/dvl/v1.0/assets/images/logos/rbc-logo-shield.svg"
                    alt=""
                  />
                </div>
                <div className=" mt-5 flex flex-col gap-4 w-full">
                  <div className="flex justify-between w-full">
                    <div className="flex flex-col gap-2 w-full">
                      <div>Your Name*</div>
                      <div className="flex justify-between w-full gap-6">
                        <input
                          type="text"
                          placeholder="First Name"
                          className="border rounded-full  p-2 h-8 w-1/2"
                        />

                        <input
                          type="text"
                          placeholder="Last Name"
                          className="border rounded-full  p-2 h-8 w-1/2"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between w-full">
                    <div className="flex flex-col gap-2 w-full">
                      <div>How can we contact you?*</div>
                      <div className="flex w-full">
                        <input
                          type="email"
                          placeholder="Email"
                          className="border rounded-full  p-2 h-8 w-full"
                        />
                      </div>
                      <div className="flex justify-between w-full">
                        <div className="flex justify-between w-full gap-6">
                          <input
                            placeholder="Work Phone (optional)"
                            type="phone"
                            className="border rounded-full  p-2 h-8 w-1/2"
                          />

                          <input
                            type="phone"
                            placeholder="Work Phone (optional)"
                            className="border rounded-full  p-2 h-8 w-1/2"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-5 sm:mt-6">
                  <button
                    type="button"
                    className="  w-fit flex justify-center  mx-auto rounded-md bg-[#015cad] px-3 py-2  font-semibold text-white shadow-sm  "
                    onClick={() => {
                      setOpen(false);
                      showPopUp(false);
                    }}
                  >
                    Submit
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default ContactUs;
