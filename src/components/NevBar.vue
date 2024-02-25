<script setup lang="ts">
import ListItem from './NavigationMenuDemoItem.vue'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu'
import router from '@/router';
import { useCookie } from 'vue-cookie-next'
const cookie = useCookie()

const logout = () => {
  // Check if 'user' cookie exists before removing it
  const userCookie = cookie.getCookie('user');
  if (userCookie) {
    // Remove the "user" cookie
    cookie.removeCookie('user')

    // Redirect to the home path
    router.push('/');
  } else {
    console.error('User cookie not found');
  }
};

const components: { title: string; href: string; description: string }[] = [
  {
    title: 'Alert Dialog',
    href: '/docs/primitives/alert-dialog',
    description:
      'A modal dialog that interrupts the user with important content and expects a response.'
  },
  {
    title: 'Hover Card',
    href: '/docs/primitives/hover-card',
    description: 'For sighted users to preview content available behind a link.'
  },
  {
    title: 'Progress',
    href: '/docs/primitives/progress',
    description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.'
  },
  {
    title: 'Scroll-area',
    href: '/docs/primitives/scroll-area',
    description: 'Visually or semantically separates content.'
  },
  {
    title: 'Tabs',
    href: '/docs/primitives/tabs',
    description:
      'A set of layered sections of content—known as tab panels—that are displayed one at a time.'
  },
  {
    title: 'Tooltip',
    href: '/docs/primitives/tooltip',
    description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.'
  }
]
</script>

<template>
  <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul
            class="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[minmax(0,.75fr)_minmax(0,1fr)]"
          >
            <li class="row-span-3">
              <NavigationMenuLink as-child>
                <a
                  class="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                  href="/"
                >
                  <img src="https://www.radix-vue.com/logo.svg" class="h-6 w-6" />
                  <div class="mb-2 mt-4 text-lg font-medium">shadcn/ui</div>
                  <p class="text-sm leading-tight text-muted-foreground">
                    Beautifully designed components built with Radix UI and Tailwind CSS.
                  </p>
                </a>
              </NavigationMenuLink>
            </li>
            <ListItem href="/docs" title="Introduction">
              Re-usable components built using Radix UI and Tailwind CSS.
            </ListItem>
            <ListItem href="/docs/installation" title="Installation">
              How to install dependencies and structure your app.
            </ListItem>
            <ListItem href="/docs/primitives/typography" title="Typography">
              Styles for headings, paragraphs, lists...etc
            </ListItem>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Pages </NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul class="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
            <router-link to="/"> <ListItem>Home</ListItem></router-link>
            <router-link to="/show_table"><ListItem> Customer </ListItem></router-link>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Settings</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul class="grid w-[200px] gap-3 p-4 md:w-[250px] md:grid-cols-1 lg:w-[300px]">
            <router-link to="/">
              <ListItem @click="logout">LogOut</ListItem>
            </router-link>
             
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
</template>
