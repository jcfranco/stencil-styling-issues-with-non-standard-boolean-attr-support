import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  @Prop({ reflect: true }) on: boolean = false;

  render() {
    return <div>{this.on ? "🔛" : "📴"}<slot></slot></div>;
  }
}
