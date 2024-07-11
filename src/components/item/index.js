import ko from 'knockout';
import './styles.scss';
import template from './template.html';

const ItemViewModel = function (params) {
  self.name = params.name;
}

ko.components.register('item', {
  viewModel: ItemViewModel,
  template,
});