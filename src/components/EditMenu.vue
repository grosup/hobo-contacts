<template>
  <div v-if="!$vuetify.display.smAndDown">
    <v-tooltip v-for="item in items" :key="item.eventName" left>
      <template #activator="{ props }">
        <v-btn
          icon
          :density="density"
          variant="text"
          class="ml-1"
          size="small"
          v-bind="props"
          @click.stop.prevent="emitEvent(item)"
        >
          <v-icon :class="item.class" color="background2" size="20">{{
            item.icon
          }}</v-icon>
        </v-btn>
      </template>

      <span>{{ item.label }}</span>
    </v-tooltip>
  </div>
  <div v-else>
    <v-menu>
      <template #activator="{ props }">
        <v-btn
          icon
          color="foreground"
          variant="text"
          size="small"
          v-bind="props"
        >
          <v-icon color="background2" size="20">mdi-dots-vertical</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="item in items" :key="item.eventName">
          <v-list-item-title color="foreground3" @click="emitEvent(item)">
            <v-icon
              :class="item.class"
              :color="item.color"
              class="mr-2"
              size="20"
              >{{ item.icon }}</v-icon
            >
            {{ item.label }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
import { required } from "@/validation/rules";
export default {
  name: "EditMenu",
  props: {
    items: {
      type: Array,
      required: true,
      validator: (items) =>
        items.every((item) => {
          if (
            Object.prototype.hasOwnProperty.call(item, "label") &&
            Object.prototype.hasOwnProperty.call(item, "icon")
          ) {
            return true;
          }
          return false;
        }),
    },
    density: {
      type: String,
      default: "default",
      required: false,
    },
  },
  methods: {
    emitEvent(item) {
      this.$emit(item.eventName, ...item.eventParams);
    },
  },
};
</script>
