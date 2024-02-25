<script setup lang="ts">
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from '@/components/ui/menubar'
</script>

<template>
  <Menubar>
    <MenubarMenu>
      <MenubarTrigger>Profiles</MenubarTrigger>
      <MenubarContent>
        <MenubarRadioGroup value="benoit">
          <MenubarRadioItem value="andy">
            Andy
          </MenubarRadioItem>
          <MenubarRadioItem value="benoit">
            Benoit
          </MenubarRadioItem>
          <MenubarRadioItem value="Luis">
            Luis
          </MenubarRadioItem>
        </MenubarRadioGroup>
        <MenubarSeparator />
        <MenubarItem inset>
          Edit...
        </MenubarItem>
        <MenubarSeparator />
        <MenubarItem inset>
          Add Profile...
        </MenubarItem>
      </MenubarContent>
    </MenubarMenu>
  </Menubar>
</template>