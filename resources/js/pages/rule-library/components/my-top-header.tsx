import { UserIconAnimated } from '@/components/animated-icons/User';
import ToggleModeSwitch from '@/components/toggle-mode-switch';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { useInitials } from '@/hooks/use-initials';
import { Link, usePage } from '@inertiajs/react';
import { Phone } from 'lucide-react';
import { MyLanguage } from './my-language';

const MyTopHeader = () => {
    const getInitials = useInitials();
    const { auth } = usePage().props;
    const { application_info } = usePage().props;
    return (
        <div className="bg-background mt-1 px-4 py-1 sm:px-6 md:px-10 xl:px-20">
            <div className="text-foreground mx-auto flex max-w-screen-2xl flex-wrap items-center justify-between lg:justify-end gap-4 text-sm">
                {/* Left Section (Language Switcher) */}
               <div className='flex gap-3'>
                 {/* <div className="flex items-center gap-1">
                    <Phone size={16} />
                    <span className="truncate">{application_info?.phone}</span>
                </div> */}
                <div className="flex-shrink-0">
                    <MyLanguage/>
                </div>
               
               </div>

                {/* Right Section (Phone + Login) */}
                <div className="flex min-w-0 flex-wrap items-center justify-end gap-3">
                    <div className="flex items-center gap-1">
                        {auth?.user ? (
                            <Link prefetch href="/dashboard">
                                <Avatar className="size-8 bg-true-primary-six overflow-hidden rounded-full">
                                    <AvatarImage src={`/assets/images/users/thumb/${auth?.user?.image}`} alt={auth?.user?.name} />

                                    <AvatarFallback className="rounded-lg bg-neutral-200 text-black dark:bg-neutral-700 dark:text-white">
                                        {getInitials(auth?.user?.name)}
                                    </AvatarFallback>
                                </Avatar>
                            </Link>
                        ) : (
                            <Link prefetch href="/login">
                                <Button size="icon" variant="outline" className="text-primary">
                                    {/* <User2Icon /> */}
                                    <UserIconAnimated stroke="#0471c1" />
                                </Button>
                            </Link>
                        )}
                    </div>
                    <ToggleModeSwitch />
                </div>
            </div>
        </div>
    );
};

export default MyTopHeader;
