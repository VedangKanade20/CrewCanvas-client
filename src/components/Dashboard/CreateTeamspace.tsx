import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import ColorDropdown from '../ui/ColorDropdown';

export function CreateTeamspace() {
  return (
    <div className="text-slate-300 ">
      <Dialog>
        <DialogTrigger
          asChild
          className="flex items-center  text-sm text-gray-300 hover:bg-[#131212] rounded-lg pl-3 py-2 transition"
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <Button variant="default">Create Teamspace</Button>
          </div>
        </DialogTrigger>
        <DialogContent className="md:min-w-[35vw] h-[50vh] text-slate-300 bg-[#131212] border border-gray-700 rounded-3xl ">
          <DialogHeader className='pl-2'>
            <DialogTitle>Create New Teamspace</DialogTitle>
            <DialogDescription>
              Create a collaborative workspace for your team to work together.
            </DialogDescription>
          </DialogHeader>
          <form
            onSubmit={(e) => {
              e.preventDefault(); /* Handle form submission */
            }} className='-p-3'
          >
            <div className="flex flex-col gap-4 py-3">
              <div className=" flex flex-col gap-3 pl-3 -mt-20">
                <Label htmlFor="TeamspaceName" className="pl-2 ">
                  Teamspace Name
                </Label>
                <Input id="TeamspaceName" placeholder="Enter the name for you new Teamspace" />
              </div>
              <div className=" flex flex-col gap-3 pl-3">
                <Label htmlFor="description" className="pl-2 ">
                  Description
                </Label>
                <Input id="name" value="Pedro Duarte" />
              </div>
              <div className="flex w-full gap-4">
                {' '}
                <div className="flex flex-col gap-3 pl-3 w-[80%]">
                  <Label htmlFor="description" className="pl-2 ">
                    Color
                  </Label>
                  <ColorDropdown />
                </div>
              </div>

              <button className="w-1/3 transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-gradient-to-r dark:from-purple-700 dark:to-blue-500 absolute bottom-6 right-8">
                Explore Now
              </button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
