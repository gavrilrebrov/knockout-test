import $ from 'jquery';
import 'jquery-ui';
import ko from 'knockout';
import 'knockout-sortable';
import './assets/fonts/firasans.css';
import './assets/scss/main.scss';
import switcherIcon from './assets/icons/switcher.svg';
import draggerIcon from './assets/icons/dragger.svg';

import './components/category';
import './components/item';

function AppViewModel() {
  const self = this;

  self.categories = ko.observableArray([
    {
      name: 'Обязательные для всех',
      opened: true,
      items: ko.observableArray(['Паспорт', 'ИНН'])
    },
    {
      name: 'Обязательные для трудоустройства',
      opened: false,
      items: ko.observableArray(['Трудовой договор'])
    },
    {
      name: 'Специальные',
      opened: false,
      items: ko.observableArray([])
    },
  ]);

  self.onDragStart = function (e, ui) {
    $(ui.item).clone().attr('style', 'opacity:.2;position:relative;z-index:0').addClass('clone').insertAfter(ui.item);

    $(ui.item).find('.category__block').attr('style', 'box-shadow: 0px 3px 16px 0px #0066FFB2');
    $(ui.item).find('.category__items').hide();
    $(ui.item).find('.category__dragger .icon').attr('style', 'color: #0066FF');
  }

  self.onDragStop = function (e, ui) {
    $('.clone').remove();
    $(ui.item).find('.category__block').removeAttr('style');
    $(ui.item).find('.category__dragger .icon').removeAttr('style');
  }

  self.onDragSort = function (e, ui) {
    $(ui.placeholder).attr('style', 'display:block;height:5px;background:#0066FF');
  }

  self.icons = {
    switcher: switcherIcon,
    dragger: draggerIcon,
  }
}

ko.applyBindings(new AppViewModel());
