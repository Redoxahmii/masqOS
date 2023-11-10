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

export default function DownloadModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <Button
        onPress={onOpen}
        radius="full"
        variant="flat"
        className=" text-white"
      >
        System Requirements
      </Button>
      <Modal
        backdrop="blur"
        as="div"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-2xl">
                System Requirements
              </ModalHeader>
              <ModalBody>
                <div>
                  <p>
                    ISO size:{" "}
                    <span className="text-primary font-bold">2 GB</span>{" "}
                  </p>
                  <p>
                    Storage:{" "}
                    <span className="text-primary font-bold">6 GB</span>{" "}
                  </p>
                  <p>
                    RAM: <span className="text-primary font-bold">1-2 GB</span>{" "}
                  </p>
                  <p>
                    Processor:{" "}
                    <span className="text-primary font-bold">1.0 GHz</span>
                  </p>
                  <p>
                    Architecture:{" "}
                    <span className="text-primary font-bold">x64 and x32</span>
                  </p>
                  <p>
                    Generation:{" "}
                    <span className="text-primary font-bold">
                      3rd Generation and onwards
                    </span>
                  </p>
                </div>
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
                <Button color="primary" radius="full" onPress={onClose}>
                  Download
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
