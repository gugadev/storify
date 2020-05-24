/// <reference types="react" />

declare namespace StorifyNS {
  type Props = React.HTMLProps<HTMLButtonElement> & {
    
  }
}

declare namespace StoryNS {
  type Props = React.HTMLProps<HTMLButtonElement> & {
    
  }
}

declare namespace ProgressNS {
  type Props = React.HTMLProps<HTMLButtonElement> & {
    
  }
}

declare module '@gugadev/storify/react' {
  export const Progress: React.FC<ProgressNS.Props>;
  export const Story: React.FC<StoryNS.Props>;
  export const Storify: React.FC<StorifyNS.Props>;
}
