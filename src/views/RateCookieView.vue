<template>
  <main>
    <h1>Add a New Note</h1>
    <form>
      <div>
        <label for="cookie">Choose Cookie:</label>
        <select id="cookie" name="cookie">
          <option v-for="cookie in formStore.cookies" :key="cookie" :value="cookie">{{ cookie }}</option>
        </select>
      </div>
      <div>
        <label for="place">Choose Place:</label>
        <select id="place" name="place">
          <option v-for="place in formStore.places" :key="place" :value="place">{{ place }}</option>
        </select>
      </div>
      <div>
        <label for="taste">Taste (0-5):</label>
        <input type="number" id="taste" name="taste" min="0" max="5">
      </div>
      <div>
        <label for="appearance">Appearance (0-5):</label>
        <input type="number" id="appearance" name="appearance" min="0" max="5">
      </div>
      <div>
        <label for="texture">Texture (0-5):</label>
        <input type="number" id="texture" name="texture" min="0" max="5">
      </div>
      <button type="submit">Add Note</button>
    </form>
  </main>
</template>

<script lang="ts">
import useFormStore from '@/stores/formStore';

export default {
  setup() {
    const formStore = useFormStore();
    return {
      formStore
    };
  }
};
</script>
