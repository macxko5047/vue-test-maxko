<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import { h } from 'vue'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'

import { toast } from '@/components/ui/toast'
import router from '@/router'

// ... (Your existing imports)
const dialogRef = ref(false);

const openDialog = () => {
  dialogRef.value = true;
};

const formSchema = toTypedSchema(
  z.object({
    id: z.string().min(4).max(4),
    customer_name: z.string().min(2).max(50)
  })
)

const { handleSubmit } = useForm({
  validationSchema: formSchema
})

const onSubmit = handleSubmit(async (values) => {
  try {
    const response = await fetch(
      'https://my-json-server.typicode.com/macxko5047/test_login/customer',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      }
    )

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    const data = await response.json()
    console.log('Server response:', data)
  // Close the dialog upon successful submission
  dialogRef.value = false
    toast({
      title: 'Create Customer Success',
      description: h(
        'pre',
        { class: 'mt-2 w-[340px] rounded-md bg-slate-950 p-4' },
        h('code', { class: 'text-white' }, JSON.stringify(data, null, 2))
      )
    })
  } catch (error) {
    console.error('Error submitting form:', error)
    toast({
      title: 'Error',
      description: 'Error id unique or Dubble.'
    })
  }
})
</script>

<template>
  <Dialog ref="dialogRef">
    <DialogTrigger as-child>
      <Button variant="outline" @click="openDialog"> Create Customer </Button>
    </DialogTrigger>
    <DialogContent class="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Create Customer.</DialogTitle>

        <DialogDescription> id 4v. CustomerName 50v. </DialogDescription>
      </DialogHeader>
      <form class="space-y-6" @submit="onSubmit">
        <FormField v-slot="{ componentField }" name="id">
          <FormItem>
            <FormLabel>id</FormLabel>
            <FormControl>
              <Input type="text" placeholder="shadcn" v-bind="componentField" />
            </FormControl>
            <!-- <FormDescription>
          id customer from bar bar bar
        </FormDescription> -->
            <FormMessage />
          </FormItem>
        </FormField>
        <FormField v-slot="{ componentField }" name="customer_name">
          <FormItem>
            <FormLabel>Customer Name</FormLabel>
            <FormControl>
              <Input type="text" placeholder="shadcn" v-bind="componentField" />
            </FormControl>
            <!-- <FormDescription>
          customer name na
        </FormDescription> -->
            <FormMessage />
          </FormItem>
        </FormField>
        
          
            
            <Button type="submit"> Save changes </Button>
      
        
      </form>
    </DialogContent>
  </Dialog>
</template>
