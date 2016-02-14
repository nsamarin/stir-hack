#include <pebble.h>
#define KEY_VIBRATE 1
#define KEY_BUTTON_UP   0
#define KEY_BUTTON_DOWN 1
#define KEY_BUTTON_SELECT 2
static Window *s_main_window;
static TextLayer *s_output_layer;
static void send(int key, int value) {
  DictionaryIterator *iter;
  app_message_outbox_begin(&iter);
  dict_write_int(iter, key, &value, sizeof(int), true);
  app_message_outbox_send();
}
static void outbox_sent_handler(DictionaryIterator *iter, void *context) {
  // Ready for next command
//   text_layer_set_text(s_output_layer, "Press up or down.");
}
static void outbox_failed_handler(DictionaryIterator *iter, AppMessageResult reason, void *context) {
//   text_layer_set_text(s_output_layer, "Send failed!");
//   APP_LOG(APP_LOG_LEVEL_ERROR, "Fail reason: %d", (int)reason);
}
static void up_click_handler(ClickRecognizerRef recognizer, void *context) {
  text_layer_set_text(s_output_layer, "Up");
  send(KEY_BUTTON_UP, 0);
}
static void down_click_handler(ClickRecognizerRef recognizer, void *context) {
  text_layer_set_text(s_output_layer, "Down");
  send(KEY_BUTTON_DOWN, 0);
}
static void select_click_handler(ClickRecognizerRef recognizer, void *context) {
  text_layer_set_text(s_output_layer, "Select");
  send(KEY_BUTTON_SELECT, 0);
}
static void click_config_provider(void *context) {
  window_single_click_subscribe(BUTTON_ID_UP, up_click_handler);
  window_single_click_subscribe(BUTTON_ID_DOWN, down_click_handler);
  window_single_click_subscribe(BUTTON_ID_SELECT, select_click_handler);
}
static void main_window_load(Window *window) {
  Layer *window_layer = window_get_root_layer(window);
  GRect bounds = layer_get_bounds(window_layer);
//   const int text_height = 20;
//   const GEdgeInsets text_insets = GEdgeInsets((bounds.size.h - text_height) / 2, 0);
  s_output_layer = text_layer_create(GRect(5, 0, bounds.size.w - 5, bounds.size.h));
  text_layer_set_overflow_mode(s_output_layer, GTextOverflowModeWordWrap);
  text_layer_set_text_alignment(s_output_layer, GTextAlignmentCenter);
  layer_add_child(window_layer, text_layer_get_layer(s_output_layer));
}
static void my_layer_draw(Layer *layer, GContext *ctx) {
  GRect bounds = layer_get_bounds(layer);
  // Draw a black filled rectangle with sharp corners
  graphics_context_set_fill_color(ctx, GColorBlack);
  graphics_fill_rect(ctx, bounds, 0, GCornerNone);
  // Draw a white filled circle a radius of half the layer height
  graphics_context_set_fill_color(ctx, GColorWhite);
  const int16_t half_h = bounds.size.h / 2;
  graphics_fill_circle(ctx, GPoint(half_h, half_h), half_h);
}
static void main_window_unload(Window *window) {
  text_layer_destroy(s_output_layer);
}
static void inbox_received_handler(DictionaryIterator *iterator, void *context) {
  // Get the first pair
  Tuple *t = dict_read_first(iterator);
  // Process all pairs present
  while(t != NULL) {
    // Process this pair's key
    switch(t->key) {
      case KEY_VIBRATE:
        // Trigger vibration
        // text_layer_set_text(s_text_layer, "Vibrate!");
        vibes_short_pulse();
        break;
      default:
        APP_LOG(APP_LOG_LEVEL_INFO, "Unknown key: %d", (int)t->key);
        break;
    }
    // Get next pair, if any
    t = dict_read_next(iterator);
  }
}
static void init(void) {

 // Register callbacks
  app_message_register_outbox_sent(outbox_sent_handler);
  app_message_register_outbox_failed(outbox_failed_handler);

  app_message_register_inbox_received(inbox_received_handler);
//   app_message_register_inbox_dropped(inbox_dropped_handler);

  app_message_open(app_message_inbox_size_maximum(), app_message_outbox_size_maximum());


  s_main_window = window_create();
  window_set_click_config_provider(s_main_window, click_config_provider);
  window_set_window_handlers(s_main_window, (WindowHandlers) {
    .load = main_window_load,
    .unload = main_window_unload,
  });
  window_stack_push(s_main_window, true);

}
static void deinit(void) {
  window_destroy(s_main_window);
}
int main(void) {
  init();
  app_event_loop();
  deinit();
}
