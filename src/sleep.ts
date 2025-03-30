function sleep(ms: number = 1000): Promise<void> {
    return new Promise<void>((resolve) => setTimeout(resolve, ms));
  }

  export default sleep;
