import { 
    LayoutDashboard,
    Folder,
    User,
    CreditCard,
    Settings,
    Newspaper
 } from "lucide-react";
 import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
  } from "@/components/ui/command"
  import Link from "next/link";

const SideBar = () => {
    return ( 
        <Command className="bg-secondary rounded-none">
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Suggestions">
                    <CommandItem>
                        <LayoutDashboard className="mr-2 w-4 h-4"/>
                        <Link href={'/'}>Dashboard</Link>
                    </CommandItem>
                    <CommandItem>
                        <Newspaper className="mr-2 w-4 h-4"/>
                        <Link href={'/posts'}>Posts</Link>
                    </CommandItem>
                    <CommandItem>
                        <Folder className="mr-2 w-4 h-4"/>
                        <Link href={'#'}>Categories</Link>
                    </CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Settings">
                    <CommandItem>
                        <User className="mr-2 w-4 h-4"/>
                        <Link href={'#'}>Profile</Link>
                        <CommandShortcut>ctrl+p</CommandShortcut>
                    </CommandItem>
                    <CommandItem>
                        <CreditCard className="mr-2 w-4 h-4"/>
                        <Link href={'#'}>Billing</Link>
                        <CommandShortcut>ctrl+b</CommandShortcut>
                    </CommandItem>
                    <CommandItem>
                        <Settings className="mr-2 w-4 h-4"/>
                        <Link href={'#'}>Settings</Link>
                        <CommandShortcut>ctrl+s</CommandShortcut>
                    </CommandItem>
                </CommandGroup>
            </CommandList>
        </Command>
     );
}
 
export default SideBar;