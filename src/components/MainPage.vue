<script setup lang="ts">

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'


</script>

<template>
  <div class="m-10">
    <Card class="w-[100%]">
      <CardHeader>
        <CardTitle class="flex justify-center">Welcome to my page MAXKO</CardTitle>
        <CardDescription class="flex justify-center">Create from vue</CardDescription>
      </CardHeader>
      <CardContent class="flex justify-center">
    Please Select this pages for test by maxko.
      </CardContent>
      <CardFooter class="flex justify-center px-6 pb-6">
        <p >test by maxko 25/02/24</p>
   
      </CardFooter>
    </Card>
  </div>
</template>
