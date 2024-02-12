"use client";
import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import Link from "next/link";

export default function DownloadModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <React.Fragment>
      <Button
        suppressHydrationWarning
        onPress={onOpen}
        radius="full"
        variant="flat"
        className="text-white"
      >
        System Requirements
      </Button>
      <Modal backdrop="blur" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-2xl">
                System Requirements
              </ModalHeader>
              <ModalBody>
                <p>
                  ISO size: <span className="text-primary font-bold">2 GB</span>{" "}
                </p>
                <p>
                  Storage: <span className="text-primary font-bold">16 GB</span>{" "}
                </p>
                <p>
                  RAM: <span className="text-primary font-bold">4 GB</span>{" "}
                </p>
                <p>
                  Processor:{" "}
                  <span className="text-primary font-bold">Atleast 1.0GHz</span>
                </p>
                <p>
                  Architecture:{" "}
                  <span className="text-primary font-bold">x64 and x32</span>
                </p>
                <p>
                  Generation:{" "}
                  <span className="text-primary font-bold">
                    All AMD and Intel
                  </span>
                </p>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  variant="light"
                  radius="full"
                  onPress={onClose}
                >
                  Close
                </Button>
                <Link
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://sourceforge.net/projects/masq-os/files/MASQOS_2024-02-11_1859.iso/download"
                >
                  <Button color="primary" radius="full">
                    Download
                  </Button>
                </Link>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </React.Fragment>
  );
}
