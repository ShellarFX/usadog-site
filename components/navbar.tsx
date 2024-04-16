'use client';

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from '@nextui-org/navbar';
import { Button } from '@nextui-org/button';
import { Kbd } from '@nextui-org/kbd';
import { Link } from '@nextui-org/link';
import { Input } from '@nextui-org/input';

import { link as linkStyles } from '@nextui-org/theme';

import { siteConfig } from '@/config/site';
import NextLink from 'next/link';
import clsx from 'clsx';
import Image from 'next/image';

export const Navbar = () => {
  return (
      <NextUINavbar maxWidth="xl" position="sticky" isBlurred={false}>
        <NavbarBrand>
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Image src="/logo.png" alt="logo" width={0} height={0} sizes="100vw" className="h-12 w-auto" />
          </NextLink>
        </NavbarBrand>


        <NavbarContent className="gap-8" justify="center">
          <ul className="hidden lg:flex gap-4 justify-start ml-2">
            {siteConfig.navAnchors.map((item) => (
                <NavbarItem key={item.id}>
                  <div
                      className={clsx(
                          linkStyles({ color: 'foreground' }),
                          'data-[active=true]:text-primary data-[active=true]:font-medium !text-2xl mt-2 cursor-pointer',
                      )}

                      color="foreground"
                      onClick={() => document.getElementById(item.id as string)?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    {item.label}
                  </div>
                </NavbarItem>
            ))}
          </ul>
        </NavbarContent>

        <NavbarContent
            className="hidden sm:flex"
            justify="end"
        >
          <Button
              isExternal
              as={Link}
              className="text-sm font-normal text-white bg-foreground2"
              variant="flat"
              href="https://t.me/usadogofficial"
          >
            JOIN US
          </Button>
        </NavbarContent>

        <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
          {/*<Link isExternal href={siteConfig.links.github} aria-label="Github">*/}
          {/*	<GithubIcon className="text-default-500" />*/}
          {/*</Link>*/}
          {/*<ThemeSwitch />*/}
          <NavbarMenuToggle />
        </NavbarContent>

        <NavbarMenu>
          <div className="mx-4 mt-2 flex flex-col gap-2">
            {siteConfig.navAnchors.map((item, index) => (
                <NavbarMenuItem key={`${item}-${index}`}>
                  <div
                      className="cursor-pointer"
                      onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    {item.label}
                  </div>
                </NavbarMenuItem>
            ))}
          </div>
        </NavbarMenu>
      </NextUINavbar>
  );
};
