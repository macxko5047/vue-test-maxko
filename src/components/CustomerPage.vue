<script setup lang="ts">
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import buttonCreateCustomer from './DialogCreateCustomer.vue'

import { ref, onMounted, computed, watch } from 'vue'

const apiUrl = 'https://my-json-server.typicode.com/macxko5047/test_login/customer'
const rows = ref<any[]>([])
const searchQuery = ref('');
const pageSize = 10;
const currentPage = ref(1);

const fetchData = async () => {
  try {
    const response = await fetch(apiUrl)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }
    const data = await response.json()
    rows.value = data
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

onMounted(() => {
  fetchData()
})

// Watch for changes in searchQuery and reset currentPage to 1
watch(searchQuery, () => {
  currentPage.value = 1;
});

const paginatedRows = computed(() => {
  const startIndex = (currentPage.value - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  return rows.value.slice(startIndex, endIndex);
});

const totalPages = computed(() => Math.ceil(rows.value.length / pageSize));

const filteredRows = computed(() => {
  const query = searchQuery.value.toLowerCase();
  return rows.value.filter(item =>
    item.id.toString().includes(query) ||
    item.customerName.toLowerCase().includes(query)
  );
});

const displayedRows = computed(() => {
  const startIndex = (currentPage.value - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  return filteredRows.value.slice(startIndex, endIndex);
});

</script>

<template>
  <div class="m-10">
    <Card class="w-[100%]">
      <CardHeader>
        <div class="flex justify-between">
          <CardTitle>Table</CardTitle>
        <buttonCreateCustomer/>
        </div>
      
        <CardDescription>Show data Customer</CardDescription>
      </CardHeader>
      <CardContent>
        <Input v-model="searchQuery" placeholder="Search..." />
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead class="w-[100px]">id</TableHead>
              <TableHead>customerName</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow v-for="item in displayedRows" :key="item.id">
              <TableCell>{{ item.id }}</TableCell>
              <TableCell>{{ item.customerName }}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter class="flex justify-between px-6 pb-6">
        <p>test by maxko</p>
        <div class="space-x-4">
          <Button @click="currentPage > 1 ? currentPage-- : currentPage" :disabled="currentPage === 1">Previous</Button>
          <span>{{ currentPage }} / {{ totalPages }}</span>
          <Button @click="currentPage < totalPages ? currentPage++ : currentPage" :disabled="currentPage === totalPages">Next</Button>
        </div>
        <div>
          <p>Total rows: {{ filteredRows.length }}</p>
        </div>
      </CardFooter>
    </Card>
  </div>
</template>
