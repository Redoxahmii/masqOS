"use client";
import { motion } from "framer-motion";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/table";

export default function Performance() {
  return (
    <div className="flex px-10">
      <div className="w-1/2">
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            amount: 1,
          }}
          className="sticky w-[40vw] h-32 mt-10 top-96"
        >
          <div className="w-full max-w-lg">
            <h1 className="text-3xl tracking-tighter font-semibold">
              Performance was measured by benchmarking on popular testing suites
              like Will-It-Scale and OS-Bench
            </h1>
          </div>
        </motion.div>
      </div>
      <div className="w-[2000px] h-[100vh] bg-gradient-to-b flex relative gap-20 p-5 flex-col">
        <Table
          aria-label="Example static collection table"
          classNames={{
            th: "bg-primary-400 dark:bg-primary text-foreground text-lg",
          }}
        >
          <TableHeader>
            <TableColumn>Will-It-Scale</TableColumn>
            <TableColumn>Manjaro</TableColumn>
            <TableColumn>Ubuntu</TableColumn>
            <TableColumn>MASQ-OS</TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow key="1">
              <TableCell>BRK-1</TableCell>
              <TableCell>2274290</TableCell>
              <TableCell>21535805</TableCell>
              <TableCell className=" text-success">29632991</TableCell>
            </TableRow>
            <TableRow key="2">
              <TableCell>DUP1</TableCell>
              <TableCell>29771383</TableCell>
              <TableCell>38787156</TableCell>
              <TableCell className="text-success">458833388</TableCell>
            </TableRow>
            <TableRow key="3">
              <TableCell>OPEN1</TableCell>
              <TableCell>1693160</TableCell>
              <TableCell>1457547</TableCell>
              <TableCell className="text-success">7443261</TableCell>
            </TableRow>
            <TableRow key="4">
              <TableCell>PIPE1</TableCell>
              <TableCell>16775227</TableCell>
              <TableCell>17659169</TableCell>
              <TableCell className="text-success">22162859</TableCell>
            </TableRow>
            <TableRow key="5">
              <TableCell>READ1</TableCell>
              <TableCell>7582574</TableCell>
              <TableCell>7384406</TableCell>
              <TableCell className="text-success">9497346</TableCell>
            </TableRow>
            <TableRow key="6">
              <TableCell>UNIX1</TableCell>
              <TableCell>7655184</TableCell>
              <TableCell>7594859</TableCell>
              <TableCell className="text-success">11432087</TableCell>
            </TableRow>
            <TableRow key="7">
              <TableCell>WRITE1</TableCell>
              <TableCell>4202151</TableCell>
              <TableCell>4138132</TableCell>
              <TableCell className="text-success">19597848</TableCell>
            </TableRow>
            <TableRow key="8">
              <TableCell>GETPPID1</TableCell>
              <TableCell>68956796</TableCell>
              <TableCell>101862739</TableCell>
              <TableCell className="text-success">115456113</TableCell>
            </TableRow>
            <TableRow key="9">
              <TableCell>FALLOCATE1</TableCell>
              <TableCell>3340347</TableCell>
              <TableCell>3218696</TableCell>
              <TableCell className="text-success">3415505</TableCell>
            </TableRow>
            <TableRow key="10">
              <TableCell>PTHREAD_MUTEX1</TableCell>
              <TableCell>1273310447</TableCell>
              <TableCell className="text-success">1341635282</TableCell>
              <TableCell>1267267835</TableCell>
            </TableRow>
            <TableRow key="11">
              <TableCell>CONTEXT_SWITCH1</TableCell>
              <TableCell>3228692</TableCell>
              <TableCell>3981011</TableCell>
              <TableCell className="text-success">5055257</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Table aria-label="Example static collection table">
          <TableHeader>
            <TableColumn>OS Bench</TableColumn>
            <TableColumn>Manjaro</TableColumn>
            <TableColumn>Ubuntu</TableColumn>
            <TableColumn>MASQ-OS</TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow key="1">
              <TableCell>Create File</TableCell>
              <TableCell>17.318552</TableCell>
              <TableCell>18.519857</TableCell>
              <TableCell className="text-success">16.0733836</TableCell>
            </TableRow>
            <TableRow key="2">
              <TableCell>Create Threads</TableCell>
              <TableCell>14.736652</TableCell>
              <TableCell>13.093154</TableCell>
              <TableCell className="text-success">11.088371</TableCell>
            </TableRow>
            <TableRow key="3">
              <TableCell>Launch Programs</TableCell>
              <TableCell>44.751167</TableCell>
              <TableCell>47.482649</TableCell>
              <TableCell className="text-success">38.326581</TableCell>
            </TableRow>
            <TableRow key="4">
              <TableCell>Create Processes</TableCell>
              <TableCell>30.999184</TableCell>
              <TableCell>31.637351</TableCell>
              <TableCell className="text-success">23.800532</TableCell>
            </TableRow>
            <TableRow key="5">
              <TableCell>Memory Allocation</TableCell>
              <TableCell>75.317939 </TableCell>
              <TableCell>74.831724 </TableCell>
              <TableCell className="text-success">72.159964</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
