<template>
<div>
	<v-frappe-chart
    type="bar"
    :labels="['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']"
    :data="[
        { values: [18, 40, 30, 35, 8, 52, 17, -4] }
    ]"
    :colors="['red']"
/>
</div>
</template>
