"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Modal({ modal, setModal, resetModal }) {
  //hook to control the state of the network-switch, from modal "network-manager"
  const [switchModal, setSwitchModal] = useState(false);

  //function to toggle between the boolean state of "switchModal"
  //executed whenever you  click on the network-switch in "network-manager"
  const toggleSwitch = () => {
    if (switchModal != true) {
      setSwitchModal(true);
    } else {
      setSwitchModal(false);
    }
  };
  return (
    <div className="create-attributes">
    <div className="input">
      <input type="text" className="key" placeholder="key" />
      <input type="text" className="value" placeholder="value" />
    </div>
    <div className="submit">add</div>
  </div>
  );
}
