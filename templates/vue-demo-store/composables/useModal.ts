/**
 * Use it to create simple modal controllers
 */
export function useModal() {
  const isOpen = ref(false);

  const open = () => {
    isOpen.value = true;
  };

  const close = () => {
    isOpen.value = false;
  };

  const route = useRoute();
  watch(
    () => route.path,
    () => {
      close();
    },
  );

  return {
    isOpen: computed(() => isOpen.value),
    open,
    close,
  };
}

export const useSideMenuModal = createSharedComposable(useModal);
export const useMiniCartModal = createSharedComposable(useModal);
