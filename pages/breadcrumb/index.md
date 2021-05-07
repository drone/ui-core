import { Breadcrumb } from "../../src/components/breadcrumb/Breadcrumb";
import Playground from "../../docs/playground";

# Default

The default form of breadcrumbs.

<Playground
  scope={{ Breadcrumb }}
  code={`() => (
    <Breadcrumb>
        <a href="#">Repositories</a>
        <a href="#">drone</a>
        <a href="#">drone-go</a>
    </Breadcrumb>
);`}
/>
