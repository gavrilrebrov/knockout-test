import ko from 'knockout';
import './styles.scss';
import template from './template.html';

const CategoryViewModel = function (params) {
  const self = this;

  self.name = params.name;
  self.items = params.items;
  self.opened = ko.observable(params.opened);

  self.toggle = function (e) {
    self.opened(!self.opened());
  }

  self.onDragStart = function (e, ui) {
    $(ui.item).clone().attr('style', 'opacity:.2;position:relative;z-index:0').addClass('clone').insertAfter(ui.item);

    $(ui.item).find('.item').attr('style', 'box-shadow: 0px 3px 16px 0px #0066FFB2');
    $(ui.item).find('.item__dragger .icon').attr('style', 'color: #0066FF');
  }

  self.onDragStop = function (e, ui) {
    $('.clone').remove();
    $(ui.item).find('.item').removeAttr('style');
    $(ui.item).find('.item__dragger .icon').removeAttr('style');
  }

  self.onDragSort = function (e, ui) {
    $(ui.placeholder).attr('style', 'display:block;height:5px;background:#0066FF');
  }
}

ko.components.register('category', {
  viewModel: CategoryViewModel,
  template,
});