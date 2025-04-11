"use client";
import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover";
  import { Calendar } from "@/components/ui/calendar";
  import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
  } from "@/components/ui/dialog";
  import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ArrowLeft, CalendarIcon, Plus, Search } from 'lucide-react';

import { Button } from '@/components/ui/button';
import building from "../../../../public/assets/building.png";
import filter from "../../../../public/assets/filter.png";
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import MyTask from './my-task';
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils"
import { DatePicker } from "./date-picker";
import {format} from "date-fns";
import FilterCategory from "./filter-category";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
 


const formSchema = z.object({
  reccuringTask: z.enum(["yes", "no"], {
    required_error: "Select if you want a reccuring task. ", 
  }),
  taskName: z.string().min(2, {
    message: "Enter the name of your task"
  })
})
 


const page = () => {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
     reccuringTask: undefined,
    },
  })
 

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }
  const DialogClose = DialogPrimitive.Close
    const DialogTrigger = DialogPrimitive.Trigger
    const [date, setDate] = React.useState<Date>();
    const currentDate = new Date(); // Get the current date
    const formattedDate = format(currentDate, "MMMM dd, yyyy");
  return (
   
    <div className='min-w-full flex px-8 flex-col'>
        <div className="w-full my-10 items-center flex justify-between">
                <div className=''>
                    <div className='flex items-center space-x-3'>
                        <div>
                            <ArrowLeft size={24} color="#956FD6"/>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h1 className='font-medium'>Your tasks</h1>
                            <div className='flex flex-row space-x-3'>
                                <h1 className='text-[#4D4D4D] text-[16px] font-normal'>{formattedDate}</h1>
                                <CalendarIcon size={24} color="#C4C4C4"/>
                            </div>
                        </div>
                    </div>
                    
                </div>
       <div className='flex flex-row space-x-3'>
            {/* Start of the create task sheet */}
            <Form  {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
      <Sheet>
      <SheetTrigger asChild>
        <Button className='flex space-x-2 bg-[#956FD6]'>
        <Plus size={24} color="white"/>
         <h1>Create Task</h1> 
          </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col space-y-4">
        <SheetHeader>
          <SheetTitle
           className="text-[36px] font-medium leading-[120%] text-[#42526E]"
          >Create Task</SheetTitle>
          <SheetDescription>
          Keep up with your everyday task and schedules. Fill out these forms accurately
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-row items-center space-x-2">
        <FormField
        control={form.control}
        name="reccuringTask"
        render={({field}) => (
          <FormItem>
            <FormLabel className="text-[#42526E] text-[15px]">Recurring Task?</FormLabel>
        <FormControl>
        <div>
      <RadioGroup
       onValueChange={field.onChange}
       defaultValue={field.value}
       className="flex flex-row space-x-3">

      <div className="flex items-center space-x-1 text-[#42526E]">
        <FormItem className="flex items-center space-x-2 space-y-0">
          <FormControl >
          <RadioGroupItem value="yes" id="r2"  />
          </FormControl>
          <FormLabel htmlFor="r2" className="ml-1 font-normal">
                        Yes
          </FormLabel>
        </FormItem>
      </div>

      <div className="flex items-center space-x-1 text-[#42526E]">
      <FormItem className="flex items-center space-x-2 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="no" id="r3" />
                      </FormControl>
                      <FormLabel htmlFor="r3" className="ml-3 font-normal">
                        No
                      </FormLabel>
          </FormItem>
      </div>
      </RadioGroup>
      </div>
        </FormControl>
      <FormMessage/>
          </FormItem>
        )}
        />
  </div>
  <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-1">
      <FormField
          control={form.control}
          name="taskName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Task Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter Task Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    
      <div className="flex flex-col gap-1">
        <FormField
        control={form.control}
        name="taskCategory"
        render={({field}) => (
          <FormItem>
          <FormLabel>Task Category</FormLabel>
          <FormControl>
            <Input placeholder="Enter Task Name" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
        )}
        />
      <label>Task category</label>
      <Input type="text" placeholder="Prototype the finance app " className="h-[55px] w-full"/>
      </div>
      <div className="flex flex-col gap-1">
      <label>Task tool</label>
      <Input type="text" placeholder="Prototype the finance app " className="h-[55px] w-full"/>
      </div>
  </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
    </form>
    </Form>
  <Button variant="outline" className='flex space-x-2'>
                        <Image src={building} alt="" width={20} height={20}/>
                        <h1><strong>0/3 tasks</strong> completed</h1>
                    </Button>
                    <Button variant="outline" className='flex space-x-2'>
                       <h1 className="text-[#956FD6]">15 Pending tasks</h1>
                    </Button>
                </div>
                </div>
                <div className='w-full max-h-screen bg-[#CACACA33] border shadow-[28px] border-slate-200 rounded-[12px]'>
                     <div className='p-6 w-full flex flex-col gap-5'>
                            <div className='flex justify-between items-center space-x-3 flex-row'>
                                <div className='w-[1054px] bg-[#FDFCFC] rounded-[38px] relative flex items-center '>
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={24}/>
                            <Input className='pl-10 h-[50px] rounded-[38px]'  placeholder='Search'/>
                     </div>
                  {/* Start of the Filter task dialog box */}
            <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="rounded-[38px] flex flex-row space-x-2" size="lg">
          <Image src={filter} alt="" width={18} height={18}/>
          <h1 className="text-[#42526ECC] text-[14px] font-light">Filter</h1>
            </Button>
      </DialogTrigger>
      <DialogContent className="py-12 px-10 max-w-3xl rounded-xl">
        <DialogHeader className="flex items-center flex-row justify-between">
          <DialogTitle className="text-[36px] font-medium leading-[120%] text-[#42526E]">Filter</DialogTitle>
        <div className="flex flex-row space-x-2">
        <DialogClose>
        <Button variant="outline" className="text-black rounded-[25px]">Cancel</Button> 
      </DialogClose>
          <Button variant="secondary"  className="text-[#FFFFFF] rounded-[25px]">Apply Filter</Button>
        </div>
        </DialogHeader>
            <div className="flex flex-col space-y-7">
            <h1 className="text-[16px] leading-[100%] font-medium">Filter by status</h1> 
        <div className="flex flex-row space-x-3 items-center">
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <label
        htmlFor="terms"
        className="text-sm  font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        In Progress
      </label>
    </div>
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <label
        htmlFor="terms"
        className="text-sm font-medium  leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Completed
      </label>
    </div>
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Overdue
      </label>
    </div>
        </div>
        <h1 className="font-medium text-[16px] pt-8 leading-[100%] text-[#42526E]">Filter by Duration</h1>

        <div className="flex flex-col gap-3">
            <div className="flex flex-row space-x-2 justify-between items-center">
            <div className="flex flex-col w-full gap-1">
                <label>From</label>
        <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Expected start date </span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(newDate) => {
            console.log("Selected date:", newDate) // Debugging log
            if (newDate) {
              setDate(new Date(newDate)) // Ensure it's a Date object
            }
          }}
          initialFocus
        />
      </PopoverContent>
    </Popover>
            </div>
            <div className="flex w-full flex-col gap-1">
            <label>To</label>
            <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Expected end date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(newDate) => {
            console.log("Selected date:", newDate)
            if (newDate) {
              setDate(new Date(newDate)) 
            }
          }}
          initialFocus
        />
      </PopoverContent>
    </Popover>
            </div>
            </div>
        </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h1>Filter by category</h1>
          <FilterCategory/>
        </div>
        
            <Button variant="outline" className="text-[#FF5531] w-36 rounded-3xl">
            Reset all filters
            </Button>
     
      </DialogContent>
                </Dialog>
                {/* End of the Filter task dialog box */}
                    </div>
            <div>
          <MyTask/>
          </div>
          </div>
          </div>
    </div>
    
  )
}
export default page