<script lang="ts">
  // TODO: fix default imports for image and css to be better with animations
  import { writable } from 'svelte/store';
  import Button from '../Button.svelte';
  import InputField from '../InputField.svelte';
  import {
    defaultFileUploaderProps,
    defaultInListItemTransition,
    defaultOutListItemTransition,
    type FileUploaderProps,
  } from './props';
  import { performTransition, type TransitionWrapper } from '../transitions';

  export let fileUploaderProps: FileUploaderProps = defaultFileUploaderProps;
  export let uploadFile: (file: FileList[]) => void = (file: FileList[]) => {
    console.log(file);
  };

  let fileList = writable<FileList[]>([]);
  const inListItemTransition: TransitionWrapper =
    defaultFileUploaderProps.inListItemTransition ??
    defaultInListItemTransition;
  const outlistItemTransition: TransitionWrapper =
    defaultFileUploaderProps.outlistItemTransition ??
    defaultOutListItemTransition;

  function handleFileChange(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      const curr = $fileList;
      curr.push(target.files);
      fileList.update(() => curr);
    }
  }

  function removeFile(index: number) {
    fileList.update((current) => {
      const newFiles = current.filter((_, i) => i !== index);
      return newFiles;
    });
  }

  function getFileIcon(file: File): string {
    const fileType = file.type.split('/')[0];
    if (fileType === 'image') {
      return URL.createObjectURL(file);
    }

    return fileUploaderProps.fileIconLink;
  }
</script>

<div class="file-uploader">
  <InputField
    type="file"
    placeholder="Upload File"
    onChange={handleFileChange}
  />

  <ul class="file-uploader-list">
    {#each $fileList as files, index}
      <li
        class="file-uploader-item"
        in:performTransition={inListItemTransition}
        out:performTransition={outlistItemTransition}
      >
        <img
          src={getFileIcon(files[0])}
          alt={files[0].name}
          class="file-uploader-icon"
        />
        <div class="file-uploader-item-text">
          {files[0].name}
        </div>
        <button class="file-uploader-remove" on:click={() => removeFile(index)}>
          ✖
        </button>
      </li>
    {/each}
    {#if $fileList.length <= 0}
      <div class="file-uploader-item-text">No File Selected</div>
    {/if}
  </ul>

  <Button onClick={() => fileList.subscribe((files) => uploadFile(files))}
    >Upload</Button
  >
</div>

<style>
  .file-uploader {
    height: var(--file-uploader-height);
    width: var(--file-uploader-width);
    display: flex;
    flex-direction: column;
    gap: var(--file-uploader-gap);
  }

  .file-uploader-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: var(--file-uploader-list-border);
    border-radius: var(--file-uploader-list-border-radius);
    list-style-type: none;
    padding: var(--file-uploader-list-padding);
    transition: all var(--file-uploader-animation-duration) ease;
  }

  .file-uploader-list:hover {
    border-color: var(--file-uploader-list-border-hover-color);
  }

  .file-uploader-item {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .file-uploader-item-text {
    display: block;
    width: 100%;
    margin: var(--file-uploader-item-text-margin);
  }

  .file-uploader-icon {
    width: var(--file-uploader-icon-size);
    height: var(--file-uploader-icon-size);
    margin: var(--file-uploader-icon-margin);
  }

  .file-uploader-remove {
    background: none;
    border: none;
    color: var(--file-uploader-remove-color);
    cursor: pointer;
    transition: all var(--file-uploader-animation-duration) ease;
  }

  .file-uploader-remove:hover {
    transform: rotate(var(--file-uploader-remove-rotation))
      scale(var(--file-uploader-remove-scale));
  }
</style>
