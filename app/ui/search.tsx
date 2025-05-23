"use client";

import { useState, useRef } from "react";
import { createPortal } from "react-dom";
import { useClickOutside } from "../lib/hooks";
import Modal from "./modal";
import SearchBar from "./searchbar";
import SearchIcon from "../../public/icons/search.svg";

export default function Search() {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef(null);

  useClickOutside(modalRef, setShowModal);

  return (
    <>
      <button
        onClick={() => setShowModal(!showModal)}
        className="transition-opacity duration-200 hover:opacity-50"
      >
        <span className="sr-only">Open search modal</span>
        <SearchIcon
          aria-hidden="true"
          className="size-5 shrink-0 text-[#484848] group-hover:text-gray-500"
        />
      </button>
      {(showModal || modalRef.current) &&
        createPortal(
          <Modal
            isOpen={showModal}
            onClose={() => setShowModal(false)}
            ref={modalRef}
          >
            {showModal && <SearchBar />}
          </Modal>,
          document.body,
        )}
    </>
  );
}
