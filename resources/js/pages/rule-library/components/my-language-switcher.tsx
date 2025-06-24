import { Check } from 'lucide-react';
import { useState } from 'react';

// UI Components
import { Button } from '@/components/ui/button';
import { Command, CommandEmpty, CommandGroup, CommandItem, CommandList } from '../components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '../components/ui/popover';

const languages = [
    {
        value: 'en',
        label: 'English',
        flag: '/assets/icons/english.png',
    },
    {
        value: 'kh',
        label: 'Khmer',
        flag: '/assets/demo-images/kh.png',
    },
];

export function MyLanguageSwitcher() {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('en');

    const selectedLanguage = languages.find((lang) => lang.value === value);

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button className='h-9' variant='outline' onClick={() => setOpen(!open)}>
                    <img src={selectedLanguage?.flag} alt={`${selectedLanguage?.label} flag`} className="h-5 w-5 rounded-full" />
                    <span className="text-sm text-gray-800 capitalize dark:text-gray-200">{selectedLanguage?.label}</span>
                </Button>
            </PopoverTrigger>

            <PopoverContent className="z-50 w-40 rounded-md border border-gray-200 bg-white p-1 shadow-md dark:border-gray-700 dark:bg-gray-800">
                <Command>
                    <CommandList>
                        <CommandEmpty>No language found.</CommandEmpty>
                        <CommandGroup>
                            {languages.map((language) => (
                                <CommandItem
                                    key={language.value}
                                    value={language.value}
                                    onSelect={() => {
                                        if (language.value !== value) {
                                            setValue(language.value);
                                        }
                                        setOpen(false);
                                    }}
                                    className="flex cursor-pointer items-center gap-2 rounded px-2 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
                                >
                                    <img src={language.flag} alt={language.label} className="h-5 w-5 rounded-full" />
                                    <span className="text-gray-800 dark:text-gray-200">{language.label}</span>
                                    <Check
                                        className={`ml-auto text-green-600 dark:text-green-400 ${
                                            value === language.value ? 'opacity-100' : 'opacity-0'
                                        }`}
                                        size={16}
                                    />
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
}
