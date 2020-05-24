import {newSpecPage} from "@stencil/core/testing";
import {Storify} from "./storify";

describe("my-component", () => {
    it("renders", async () => {
        const {root} = await newSpecPage({
            components: [Storify],
            html: "<x-storify></x-storify>",
        });
        expect(root).toEqualHtml(`
      <x-storify>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </x-storify>
    `);
    });

    it("renders with values", async () => {
        const {root} = await newSpecPage({
            components: [Storify],
            html: `<my-component first="Stencil" last="'Don't call me a framework' JS"></my-component>`,
        });
        expect(root).toEqualHtml(`
      <x-storify first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </x-storify>
    `);
    });
});
