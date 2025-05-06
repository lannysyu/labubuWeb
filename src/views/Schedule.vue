<script setup>
import Wrap from "@/layouts/Wrap.vue"
import { useRoute } from 'vue-router'
import FullCalendar from '@fullcalendar/vue3'
import interactionPlugin from '@fullcalendar/interaction'
import resourceTimelinePlugin from '@fullcalendar/resource-timeline'

// 🚀 Data
const route = useRoute()

const calendarOptions = {
    plugins: [resourceTimelinePlugin, interactionPlugin],
    initialView: 'resourceTimelineWeek',
    headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'resourceTimelineDay,resourceTimelineWeek,resourceTimelineMonth'  // ✅ 切換視圖
    },
    editable: true,
    selectable: true,
    // 排班事件
    events: [
        {
            id: '1',
            title: '早班',
            start: '2025-05-06T08:00:00',
            end: '2025-05-06T12:00:00',
            resourceId: 'emp1'
        },
        {
            id: '2',
            title: '晚班',
            start: '2025-05-06T14:00:00',
            end: '2025-05-06T20:00:00',
            resourceId: 'emp2'
        },
        {
            id: '3',
            title: '整天班',
            start: '2025-05-07T09:00:00',
            end: '2025-05-07T18:00:00',
            resourceId: 'emp3'
        }
    ],
    // 員工資源
    resources: [
        { id: 'emp1', title: '王小明' },
        { id: 'emp2', title: '陳美麗' },
        { id: 'emp3', title: '李大仁' }
    ],
    slotMinTime: '06:00:00',
    slotMaxTime: '22:00:00',
    height: 400,
}

// 🚀 Method

</script>

<template>
    <Wrap>
        <template #header>
            <div class="content-header">
                {{ route.meta.title }}
            </div>
        </template>
        <template #main>
            <FullCalendar :options="calendarOptions" />
        </template>
        <template #footer>
            <div>
                footer
            </div>
        </template>
    </Wrap>
</template>

<style scoped>
.scheduler-wrapper {
    max-width: 100%;
    padding: 16px;
}
</style>
