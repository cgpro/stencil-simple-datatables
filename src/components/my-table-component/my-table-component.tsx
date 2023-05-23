import { Component, h, Host, Element } from '@stencil/core';

// https://github.com/fiduswriter/simple-datatables
// https://fiduswriter.github.io/simple-datatables/demos/
import { DataTable } from 'simple-datatables';

@Component({
	tag: 'my-table-component',
	styleUrl: 'my-table-component.scss',
	shadow: false,
	scoped: false,
})
export class MyTableComponent {
	@Element() el: HTMLElement;

	connectedCallback() {
		document.querySelectorAll('table').forEach(table => {
			const dataTable = new DataTable(table);
			dataTable;
		});
	}

	render() {
		return <Host></Host>;
	}
}
