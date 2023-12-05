import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Input, Divider} from "@nextui-org/react";
import { SearchIcon } from "./Search-icon";

export default function NavBar() {
  return (

    <>
      <Navbar>
        <NavbarBrand>
        <Link href="/" color="foreground">
            Globalish
            </Link>
        </NavbarBrand>
        <NavbarContent className="sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" href="/">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/manga" aria-current="page" color="foreground">
              Mangas
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/categories" color="foreground">
              Categories
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent>
        <Input
            classNames={{
              base: "max-w-full sm:max-w-[10rem] h-10",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
            }}
            placeholder="Search manga..."
            size="sm"
            startContent={<SearchIcon size={18} />}
            type="search"
          />
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className=" lg:flex">
            <Link href="#">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" href="#" variant="light">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      <Divider/>
    </>
    
  );
}
