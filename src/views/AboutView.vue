<script setup>
// import CKEditor from "@ckeditor/ckeditor5-vue";
import BalloonEditor from "@ckeditor/ckeditor5-build-balloon";
// import { ref } from "vue";
import { computed } from "@vue/reactivity";
import { useStore } from "@/store";
import { ADD_COMPONENT } from "@/store/mutationTypes";
const store = useStore();
const components = computed(() => store.state.components);
const addComponent = (component) => {
  store.commit(ADD_COMPONENT, {
    components: component,
  });
};
const editor = BalloonEditor;
// const editorData = ref("<p>Content of the editor.</p>");
const editorConfig = {};
</script>
<template>
  <div class="about">
    <h1>CKEditor TEST（js）</h1>
    <ckeditor
      v-for="(component, i) in components"
      :key="i"
      :editor="editor"
      :config="editorConfig"
    ></ckeditor>
    <button type="button" @click="addComponent('QuillEditor')">
      add Editor
    </button>
  </div>
</template>
