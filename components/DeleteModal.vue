<template>
  <div class="modal" @click.self="$emit('close')">
    <div class="main-column-limit">
      <div class="window">
        <div class="btn-close-container">
          <button class="btn-transparent btn-close" @click="$emit('close')">
            <font-awesome-icon icon="times" class="icon" />
          </button>
        </div>
        <p>Are you sure you want to delete this story?</p>
        <div class="actions">
          <button class="btn btn-dark-green" @click="$emit('close')">
            Cancel
          </button>
          <button class="btn btn-black" @click="deleteStory">Yes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/api'

export default {
  props: {
    storyId: {
      type: String,
      required: true,
    },
  },
  methods: {
    async deleteStory() {
      const res = await api.stories.remove({ storyId: this.storyId })

      if ('data' in res) {
        this.$emit('delete', { id: res.data })
        this.$emit('close')
      }
    },
  },
}
</script>

<style lang="scss">
@use '@/assets/css/vars' as vars;

.modal {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  z-index: 1;

  .window {
    padding: 20px;
    background-color: vars.$white;
    border-radius: vars.$border-radius;
    flex-direction: row-reverse;

    .actions {
      display: flex;
      justify-content: space-between;
      flex-direction: row;
    }
    .btn-close-container {
      width: 100%;
      text-align: right;
    }
    .btn-close {
      font-size: 24px;

      .icon > * {
        color: vars.$black;
      }
    }
    p {
      display: block;
      margin: 20px 0;
    }
  }
}
</style>
