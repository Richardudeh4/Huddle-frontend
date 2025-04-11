"use client";
import building from "../../../../public/assets/building.png";
import React, { useState } from 'react'
import ball from "../../../../public/assets/ball.png";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"
import { PaginationData } from '../../../../config/constants';
  
import {format} from "date-fns"
import { Clock, Pencil, Zap } from 'lucide-react';
import Image from 'next/image';
  const ITEMS_PER_PAGE = 3;
const MyTask = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(PaginationData.length / ITEMS_PER_PAGE);

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentTasks = PaginationData.slice(startIndex, endIndex);

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
          }
        // Your can make API calls from here
    };
  return (
    <>
    <div className='flex flex-col gap-8'>
    {currentTasks.map((task) => (
          <div key={task.venue} className="p-4 border rounded-[18px] shadow">
            <div className='py-2.5 flex px-3 flex-col gap-2'>
            <div className="flex justify-between items-center flex-row">
                <div className='flex flex-row space-x-12'>
                    <h1>Deadline: {task?.dueDate.toString()}</h1>
                    <div className='flex flex-row items-center space-x-3'>
                        <Clock size={18} color="#956FD699"/>{" "}
                        <h1>Due by {task?.dueTime.toString()}</h1>
                    </div>
                    <div className='flex items-center flex-row space-x-2'>
                       <h1 className='text-[#999999] text-[14px] font-bold'>Tools</h1>
                     <Image src={ball} width={19} height={13}  alt=""/>
                    </div>
                    <div className="flex items-center flex-row space-x-2">
                    <Image src={building} alt="" width={20} height={20}/>
                      <h1>In Workroom</h1>
                    </div>
            </div>
            <div className="flex items-center space-x-3">
              <Pencil size={18} color="#707070"/>
              <span className="px-2 py-2 flex items-center justify-center bg-[#FFADF8] border border-slate-300 rounded-[50px]">
                {task.status}
              </span>
            </div>
            </div>
            <div className="flex justify-between items-center flex-row">
            <h1>{task.Title}</h1>
              <div className="flex flex-row space-x-1">
                  <h1 className="text-[14px] font-normal text-[#FFD159]">{task.points}</h1>  
                  <Zap size={18} color="#FFD159" />
              </div>
            </div>
            </div>
          </div>
    ))}
    </div>
     <Pagination className="mt-6">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={() => handlePageChange(currentPage - 1)}
              className={currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}
            />
          </PaginationItem>

          {[...Array(totalPages)].map((_, i) => (
            <PaginationItem key={i}>
              <PaginationLink
                href="#"
                isActive={currentPage === i + 1}
                onClick={() => handlePageChange(i + 1)}
              >
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          ))}

          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>

          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={() => handlePageChange(currentPage + 1)}
              className={currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
    
  )
}
export default MyTask
